const express = require("express");
const request = require("request");
const config = require("config");
const rp = require("request-promise");
fs = require("fs");

// Create router
const router = express.Router();

const baseURL = "https://api.propertydata.co.uk";
const propertyDataKey = config.get("propertyDataAPIKey");
const endpoints = {
    soldPrices: "sold-prices",
    growth: "growth",
    rent: "rents",
    demand: "demand",
    crime: "crime",
    demographics: "demographics",
    schools: "schools",
    areaType: "area-type",
    floorArea: "floor-areas"
};

const getEndpointURL = (endpoint, location, numBedrooms) => {
    return `${baseURL}/${endpoint}?key=${propertyDataKey}&postcode=${location.replace(
        /\s/g,
        ""
    )}${numBedrooms ? "&bedrooms=" + numBedrooms : ""}`;
};

// @router  GET api/listings/data
// @desc    Gets area info for a given area
// @access  Public
router.post("/data", async (req, res) => {
    const { location, numBedrooms } = req.body;

    var urls = Object.keys(endpoints).map(key => [
        key,
        getEndpointURL(endpoints[key], location, numBedrooms)
    ]);


    var asyncRequests = (key, url) => {
        return rp(url).then(res => ({
            [key]: JSON.parse(res)
        }));
    };

    var actions = urls.map(url => asyncRequests(...url)); // run the function over all items

    // we now have a promises array and we want to wait for it

    var results = Promise.all(actions).then(data => {
        allData = {
            location,
            numBedrooms
        };
        data.forEach(urlObj => Object.assign(allData, urlObj));

        fs.appendFile(
            "propertyAPILog.json",
            JSON.stringify(allData) + " \n",
            err => {
                if (err) throw err;
            }
        );
        res.json(allData);
    });
});

module.exports = router;
