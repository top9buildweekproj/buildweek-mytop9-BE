const jwt = require('jsonwebtoken');
const jwtKey = require('../config/secrets').jwtSecret;

module.exports = {
    authenticate,
    genAToken
}

function authenticate(req, res, next) {
    //grab token from request header
    const token = req.headers.authorization;

    //if there is a token, call verify on it, it will pass the err and decoded jwt into the verify method and return the decoded jwt
    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            //if there is an error return 401 status and error
            if(err) return res.status(401).json(err);

            //set req header's decoded attribute to the decoded jwt 
            req.decoded = decoded

            next();
        });
    } else {
        return res.status(401).json({
            error: 'No token provided'
        });
    }
}

//create json web token header
function genAToken(user) {
    const jwtPayload = { user }
    const jwtOptions = {
        expiresIn: '1d'
    };
    return jwt.sign(jwtPayload, jwtKey, jwtOptions)
}