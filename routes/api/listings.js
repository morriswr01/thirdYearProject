const express = require("express");
const request = require("request");
const config = require("config");

// Create router
const router = express.Router();

// @router  GET api/listings/nestoria
// @desc    Gets listings from nestoria API
// @access  Public
router.get("/nestoria", (req, res) => {
    request(
        "https://api.nestoria.co.uk/api?action=search_listings&centre_point=52.402178,-1.529844,1km&number_of_results=50&encoding=json",
        (err, apiRes, body) => {
            if (!err && apiRes.statusCode == 200) {
                return res.json(JSON.parse(body));
            }
            res.json({ msg: err });
        }
    );
});

// Some API for area data

module.exports = router;