const express = require('express');
const CourseRouter = express.Router();



CourseRouter.post('/purchase', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})

CourseRouter.get('/preview', function(req,res) {
    res.json({
        message: "this is the signup endpoint"
    })
})


module.exports = {
    CourseRouter:CourseRouter
}