const express = require("express");
const request = require("request");
const rp = require("request-promise");
const cheerio = require("cheerio");

// Create router
const router = express.Router();

// @router  GET api/scrape
// @desc    Get more info about a listing
// @access  Public
router.post("/listing", async (req, res) => {
    // return rp(req.body.url)
    //     .then(res => {
    //         const listing = cheerio.load(body);
    //         const description = listing(".a_teaser").text();
    //         // const description = listing(".property__description").text();
    //         const bathroom_number = listing(".a_features")
    //             .first()
    //             .children(".summary-item")
    //             .first()
    //             .text();
    //         return res.json({ description, bathroom_number });
    //     })
    //     .catch(err => console.log("No Data"));

    request(req.body.url, (err, apiRes, body) => {
        if (!err && apiRes.statusCode == 200) {
            const listing = cheerio.load(body);
            const description = listing(".a_teaser").text();
            // const description = listing(".property__description").text();
            const bathroom_number = listing(".a_features")
                .first()
                .children(".summary-item")
                .first()
                .text();
            return res.json({ description, bathroom_number });
        } else {
            return res.json({ msg: "no data" });
        }
    });
});

module.exports = router;
