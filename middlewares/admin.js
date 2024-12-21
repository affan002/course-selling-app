const jwt = require('jsonwebtoken');
const {JWT_adminpassword} = require('../config');


function adminMiddleware(req,res,next) {
    const token = req.header.token;
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
    adminMiddleware: adminMiddleware
}