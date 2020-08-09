const express = require("express");
const request = require("request");

// Create router
const router = express.Router();

// @router  GET api/listings/nestoria
// @desc    Gets listings from nestoria API
// @access  Public
router.post("/nestoria", (req, res) => {
    const {
        location,
        houseTypes,
        searchRadius,
        housePrice,
        numBedrooms
    } = req.body;

    console.log(location.postcode.split(" ")[0])

    request(
        `https://api.nestoria.co.uk/api?action=search_listings&place_name=${location.postcode.split(" ")[0]},${searchRadius}mi&bedroom_min=${numBedrooms.min}&bedroom_max=${numBedrooms.max}&price_min=${housePrice.min}&price_max=${housePrice.max}&number_of_results=50&page=1&encoding=json`,
        (err, apiRes, body) => {
            if (!err && apiRes.statusCode == 200) {
                return res.json(JSON.parse(body));
            }
            res.json({ msg: err });
        }
    );
});

module.exports = router;
