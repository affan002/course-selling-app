const { Router }= require('express')
const { AdminModel } = require("../db")

const adminRouter = Router();

adminRouter.post('/signup', function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post('/signin', function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post('/course', function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.put('/course', function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post('/course/bulk', function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})


module.exports = {
    adminRouter: adminRouter
}