const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {z} = require("zod");

const express = require("express");
const UserRouter = express.Router();//creating a router 

const {UserModel, PurchaseModel, CourseModel} = require("../db");
const {userMiddleware} = require('../middlewares/user')
const {JWT_userpassword} = require("../config")



UserRouter.post('/signup', async function(req,res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
        password: z.string().min(3).max(100)
    })
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess) {
        res.json({
            message: 'Incorrect Format',
            error: parsedDataWithSuccess.error
        })
        return;
    }

    const { email, password, firstName, lastName } = req.body;

    let errorThrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await UserModel.create({
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

UserRouter.post('/signin', async function(req,res) {
    const {email, password} = req.body;

    const user = await UserModel.findOne({
        email: email,
    })

    if (!user) {
        res.status(403).json({
            message: "user doesn't exist"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (passwordMatch){
        token = jwt.sign({
            id: user._id
        }, JWT_userpassword);

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



UserRouter.get('/purchases', userMiddleware, async function(req,res) {
    const userId = req.userId;

    const purchases = await PurchaseModel.find({
        userId
    })

    let purchasedIds = [];

    for (let i=0; i<purchases.length; i++) {
        purchasedIds.push(purchases[i].courseId);
    }

    const courseData = await CourseModel.find({
        _id : {$in: purchasedIds}
    })

    res.json({
        purchases,
        courseData
    })
})

module.exports = {
    UserRouter: UserRouter
}