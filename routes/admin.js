const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { z } = require('zod');

const express = require('express');
const AdminRouter = express.Router()

const { AdminModel, UserModel } = require('../db')
const {adminMiddleware} = require('../middlewares/admin')
const {JWT_adminpassword} = require('../config')


AdminRouter.post('/signup', async function(req,res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
        password: z.string().min(3).max(100)
    })
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.status(400).json({
            message: 'Incorrect Format',
            error: parsedDataWithSuccess.error.errors
        })
        return;
    }

    const { email, password, firstName, lastName } = req.body;

    let errorThrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await AdminModel.create({
            email: email, 
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
    } catch(e) {
        res.json({
            message:"error while putting data in DB"
        })
        errorThrown = true;
    }

    if (!errorThrown) {
        res.json({
            message: "you have signed up"
        })
    }
})

AdminRouter.post('/signin', async function(req,res) {
    const {email, password} = req.body;
    
    const admin = await AdminModel.findOne({
        email: email,
    })

    if (!admin) {
        res.status(403).json({
            message: "admin doesn't exist"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, admin.password)

    if (passwordMatch){
        token = jwt.sign({
            id: admin._id.toString()
        }, JWT_adminpassword);

        //do cookie logic here 

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
})


AdminRouter.post('/course', adminMiddleware, async function(req,res) {
    const adminId = req.userId

    const {title, description, price, imageURL, creatorId } = req.body

    course = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageURL: imageURL,
        creatorId: creatorId
    })

    res.json({
        message: 'course created',
        courseId: course._id
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