const mongoose = require("mongoose");

// Object of the listing object
const FavouriteSchema = new mongoose.Schema({});

module.exports = Favourite = mongoose.model("favourite", FavouriteSchema);
