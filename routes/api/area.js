const express = require("express");
const request = require("request");
const config = require("config");
const rp = require("request-promise");
fs = require("fs");

// Create router
const router = express.Router();

const baseURL = "https://api.propertydata.co.uk";
const propertyDataKey = config.get("propertyDataAPIKey");

const getEndpointURL = (endpoint, location, numBedrooms) => {
    return `${baseURL}/${endpoint}?key=${propertyDataKey}&postcode=${location.replace(
        /\s/g,
        ""
        )}${numBedrooms ? "&bedrooms=" + numBedrooms : ""}`;
    };
    
const endpoints = {
    soldPrices: "sold-prices",
    growth: "growth",
    rent: "rents",
    demand: "demand",
    crime: "crime",
    demographics: "demographics",
    schools: "schools"
};

// @router  GET api/listings/data
// @desc    Gets area info for a given area
// @access  Public
router.post("/data", async (req, res) => {
    const { location, numBedrooms } = req.body;

    // Generate the 10 URLS
    var urls = Object.keys(endpoints).map(key => [
        key,
        getEndpointURL(endpoints[key], location, numBedrooms)
    ]);

    // Generic request function
    var asyncRequests = (key, url) => {
        return rp(url).then(res => ({
            [key]: JSON.parse(res)
        }));
    };

    // Generate one of these request functions for each url
    var requests = urls.map(url => asyncRequests(...url));

    // we now have a promises array and we want to wait for it
    var results = Promise.all(requests).then(data => {
        // format all returned data and return it to front-end
        allData = {
            location,
            numBedrooms
        };
        data.forEach(urlObj => Object.assign(allData, urlObj));

        res.json(allData);
    });
});

module.exports = router;
