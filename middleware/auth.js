const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token in the request if not return 401 and error
    if (!token) return res.status(401).json({msg: 'No token, authorisation denied'});

    try {
        // Verify token using the secret in config/default.json
        const decoded = jwt.verify(token, config.get('jwtSecret'));
    
        // Add user from payload so that react knows who the user id is
        req.user = decoded;
        next()
    } catch (err) {
        res.status(400).json({msg: 'Token is not valid'})
    }
}

module.exports = auth;