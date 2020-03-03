const mongoose = require("mongoose");

// Object of the listing object
const SearchSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    location: {
        postcode: {
            type: String,
            required: true
        },
        latlng: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        }
    },
    city: {
        type: String,
        default: ""
    },
    houseTypes: {
        type: Array
    },
    housePrice: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 1000000
        }
    },
    numBedrooms: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 5
        }
    },
    searchRadius: {
        type: Number,
        default: 2.5
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Search = mongoose.model("search", SearchSchema);
