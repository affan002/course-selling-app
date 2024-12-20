const express = require('express');
const AdminRouter = express.Router()

const { AdminModel } = require('../db')

// AdminRouter.use(adminMiddleware)


AdminRouter.post('/signup', function(req,res) {
    res.json({
        message: "this 1 the signup endpoint"
    })
})

AdminRouter.post('/signin', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})


AdminRouter.post('/course', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})

AdminRouter.put('/course', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})

AdminRouter.post('/course/bulk', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})


module.exports = {
    AdminRouter: AdminRouter
}