// Module dependencies
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

// Initialise the express app
const app = express();

// Middleware
app.use(express.json());

// Connect to mongoDB / APIs
// ...

// Routes
app.use('/api/listings', require('./routes/api/listings'))
// /areaData

// Start server and listen on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})