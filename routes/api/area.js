const express = require("express");
const request = require("request");
const config = require("config");

// Create router
const router = express.Router();

const propertyDataKey = config.get("propertyDataAPIKey");
const baseURL = "https://api.propertydata.co.uk";

// @router  GET api/listings/data
// @desc    Gets area info for a given area
// @access  Public
router.post("/data", (req, res) => {
    const { location, numBedrooms } = req.body;

    console.log(req.body);

    return res.json({ location: location.replace(/\s/g, ""), numBedrooms });

    // request(``, (err, apiRes, body) => {
    //     if (!err && apiRes.statusCode == 200) {
    //         return res.json(JSON.parse(body));
    //     }
    //     res.json({ msg: err });
    // });
});

module.exports = router;
