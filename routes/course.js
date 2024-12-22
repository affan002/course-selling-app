const express = require('express');
const CourseRouter = express.Router();

const {userMiddleware} = require('../middlewares/user')
const {CourseModel, PurchaseModel} = require('../db')



CourseRouter.post('/purchase', userMiddleware, async function(req,res) {
    const userId = req.userID;
    const courseId = req.body.courseId;

    console.log("User ID:", userId); // Debugging line

    await PurchaseModel.create({
        userId: userId,
        courseId: courseId
    });
    res.json({
        message: "purchase successful"
    });
});


CourseRouter.get('/preview', async function(req,res) {

    const courses = await CourseModel.find({})

    res.json({
        courses
    })
})



module.exports = {
    CourseRouter:CourseRouter
}