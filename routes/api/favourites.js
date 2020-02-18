const express = require("express");
const auth = require("../../middleware/auth");

const router = express.Router();

// Get favourites model
const Favouite = require("../../models/Favourite");

// @router GET api/favourites
// @desc Gets ALL favourites in DB and return as JSON object
// @access Private(authentication token required)
router.get("/", auth, (req, res) => {
    Favouite.find({ userID: req.user.id }).then(favourites =>
        res.json(favourites)
    );
});

// @router POST api/favourites
// @desc Create a favourite in DB for current user and return as JSON object
// @access Private(authentication token required)
router.post("/", auth, (req, res) => {
    req.body.liked = true;
    const newFavourite = new Favouite({ userID: req.user.id, ...req.body });

    console.log({ userID: req.user.id, ...req.body });

    newFavourite
        .save()
        .then(favourite => {
            console.log("Sup");
            res.json(favourite);
        })
        .catch(err => {
            console.log(err.message);
            res.status(400).json({ msg: "This favourite is a duplicate" });
        });
});

// @router DELETE api/favourites
// @desc Delete the product with the given id and return deleted product as JSON object
// @access Private(authentication token required)
router.delete("/", auth, (req, res) => {
    const { id } = req.body;
    Favouite.findOneAndDelete({
        id: id,
        userID: req.user.id
    }).then(deletedFavouite => res.json(deletedFavouite));
});

module.exports = router;
