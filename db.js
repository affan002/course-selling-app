const mongoose = require('mongoose');
console.log("connected to")
mongoose.connect("mongodb+srv://muhammadaffan002ma:eo7JJbDA1ivAI8Ey@cluster0.kjx3l.mongodb.net/courseapp")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const Course = new Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId

})

const Admin = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const Purchase = new Schema({
    courseId: ObjectId,
    userId: ObjectId
})


const UserModel = mongoose.model("users", User);
const CourseModel = mongoose.model("courses", Course);
const AdminModel = mongoose.model("admin", Admin);
const PurchaseModel = mongoose.model("purchase", Purchase);


module.exports = {
    UserModel,
    CourseModel,
    AdminModel,
    PurchaseModel
} 