const express = require("express");

// Create router
const router = express.Router();

// Set up google places searching
const Places = require("google-places-web").default; // instance of GooglePlaces Class;
Places.apiKey = "AIzaSyAziShsAiM9ER0H6IrqETIrE00yzcOx124";
Places.debug = true; // boolean;

// @router  POST api/amenities
// @desc    Gets amenities for local area
// @access  Public
router.post("/", async (req, res) => {
    const types = [
        "gym",
        "restaurant",
        "primary_school",
        "park",
        "post_office",
        "secondary_school",
        "airport",
        "train_station",
        "supermarket"
    ];

    var asyncRequests = type => {
        // return Places.nearbysearch({
        //     location: `${req.body.lat},${req.body.lng}`, // LatLon delimited by ,
        //     radius: "2000", // Radius cannot be used if rankBy set to DISTANCE
        //     rankby: "prominence", // See google docs for different possible values
        //     type: [type]
        // })
        //     .then(amenities => {
        //         const amenity = amenities.results[0];
        //         return {
        //             name: amenity.name,
        //             location: amenity.geometry.location,
        //             type
        //         };
        //     })
        //     .catch(err => {
        //         return;
        //     });
    };

    var actions = types.map(type => asyncRequests(type));

    var results = Promise.all(actions)
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err.message));
});

module.exports = router;
