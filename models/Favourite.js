const mongoose = require("mongoose");

// Object of the listing object
const FavouriteSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    bathroom_number: {
        type: Number,
        default: 0
    },
    bedroom_number: {
        type: Number,
        default: 0
    },
    car_spaces: {
        type: Number,
        default: 0
    },
    commission: {
        type: Number,
        default: 0
    },
    construction_year: {
        type: Number,
        default: 0
    },
    datasource_name: {
        type: String
    },
    img_url: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    lister_url: {
        type: String
    },
    longitude: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    price_currency: {
        type: String
    },
    price_formatted: {
        type: String
    },
    property_type: {
        type: String
    },
    room_number: {
        type: Number
    },
    summary: {
        type: String
    },
    thumb_url: {
        type: String
    },
    title: {
        type: String
    },
    id: {
        type: Number,
        required: true
    },
    liked: {
        type: Boolean,
        default: true
    }
});

FavouriteSchema.index({ userID: 1, id: 1 }, { unique: true });

module.exports = Favourite = mongoose.model("favourite", FavouriteSchema);
