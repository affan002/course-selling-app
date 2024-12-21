const jwt = require('jsonwebtoken');
const {JWT_userpassword} = require('../config');


function userMiddleware(req,res,next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_userpassword);

    if (decodedData) {
        req.userID = decodedData.id;
        next();
    } else {
        res.status(403).json({
            message: 'you are not signed in'
        })
    }
}


module.exports = {
    userMiddleware: userMiddleware
}