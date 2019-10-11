const express = require('express');
const request = require('request');
const config = require('config');

// Create router
const router = express.Router();

// @router  GET api/listings/nestoria
// @desc    Gets listings from nestoria API
// @access  Public
router.get('/nestoria', (req,res) => {
    request('https://api.nestoria.co.uk/api?action=search_listings&number_of_results=1&place_name=LS16&encoding=json', 
        (err, apiRes, body) =>{
            if (!err && apiRes.statusCode == 200) {
                return res.json(JSON.parse(body));
            }
            res.json({'msg' : err})
        })
});

// Some API for area data

module.exports = router;

// =========== Does Not Work ==============
// @router  GET api/listings/zoopla
// @desc    Gets listings from nestoria API
// @access  Public
router.get('/zoopla', (req,res) => {
    request(`https://api.zoopla.co.uk/api/v1/property_listings?api_key=${config.get('zooplaApiKey')}&postcode=LS16&radius=1`, 
        (err, apiRes, body) =>{
            if (!err && apiRes.statusCode == 200) {
                return res.json(JSON.parse(body));
            }
            res.json({'msg' : err})
        })
});
// ========================================