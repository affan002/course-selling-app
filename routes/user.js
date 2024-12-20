const express = require("express");
const UserRouter = express.Router();//creating a router 


UserRouter.post('/signup', function(req,res) {
    res.json({
        message: "this 1 the signup endpoint"
    })
})

UserRouter.post('/signin', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})

UserRouter.post('/purchases', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})


module.exports = {
    UserRouter: UserRouter
}