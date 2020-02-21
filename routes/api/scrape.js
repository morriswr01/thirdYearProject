const express = require("express");
const request = require("request");
const rp = require("request-promise");
const cheerio = require("cheerio");

// Create router
const router = express.Router();

// @router  GET api/scrape
// @desc    Get more info about a listing
// @access  Public
router.post("/listing", (req, res) => {
    request(req.body.url, (err, apiRes, body) => {
        if (!err && apiRes.statusCode == 200) {
            const listing = cheerio.load(body);
            const description = listing(".a_teaser").text();
            return res.json({ description });
        }
        return res.status(400).json({ msg: "Link does not exist" });
    });
});

module.exports = router;
