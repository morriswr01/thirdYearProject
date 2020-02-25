const express = require("express");
const auth = require("../../middleware/auth");

const router = express.Router();

// Get favourites model
const Search = require("../../models/Search/Search");

// @router GET api/favourites
// @desc Gets ALL favourites in DB and return as JSON object
// @access Private(authentication token required)
router.get("/", auth, (req, res) => {
    Search.find({ userID: req.user.id }).then(favourites => {
        return res.json(favourites);
    });
});

// @router POST api/favourites
// @desc Create a favourite in DB for current user and return as JSON object
// @access Private(authentication token required)
router.post("/", auth, (req, res) => {
    req.body.liked = true;
    const newSearch = new Search({ userID: req.user.id, ...req.body });

    newSearch
        .save()
        .then(search => {
            return res.json(search);
        })
        .catch(err => {
            return res.status(400).json({ msg: err.message });
        });
});

// @router DELETE api/favourites
// @desc Delete the product with the given id and return deleted product as JSON object
// @access Private(authentication token required)
router.delete("/", auth, (req, res) => {
    const { _id } = req.body;
    Search.findOneAndDelete({
        _id: _id,
        userID: req.user.id
    }).then(deletedSearch => res.json(deletedSearch));
});

module.exports = router;
