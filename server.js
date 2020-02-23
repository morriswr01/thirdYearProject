// Module dependencies
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

// Initialise the express app
const app = express();

// Middleware
app.use(express.json());

// Connect to mongoDB / APIs
mongoose
    .connect(config.get("mongoURI"), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Routes
app.use("/api/listings", require("./routes/api/listings"));
app.use("/api/favourites", require("./routes/api/favourites"));
app.use("/api/area", require("./routes/api/area"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/amenities", require("./routes/api/amenities"));
app.use("/api/scrape", require("./routes/api/scrape"));

// Start server and listen on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
