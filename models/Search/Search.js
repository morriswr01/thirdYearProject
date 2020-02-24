const mongoose = require("mongoose");

// const LocationSchema = new mongoose.Schema({
//     postcode: {
//         type: String,
//         required: true
//     },
//     lat: {
//         type: Number,
//         required: true
//     },
//     lng: {
//         type: Number,
//         required: true
//     }
// });

// const PriceSchema = new mongoose.Schema({
//     min: {
//         type: Number,
//         default: 0
//     },
//     max: {
//         type: Number,
//         default: 1000000
//     }
// });
// const BedroomsSchema = new mongoose.Schema({
//     min: {
//         type: Number,
//         default: 0
//     },
//     max: {
//         type: Number,
//         default: 5
//     }
// });

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
