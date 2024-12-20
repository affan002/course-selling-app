const express = require('express')
const mongoose = require('mongoose')

const { UserRouter } = require('./routes/user')
const { CourseRouter } = require('./routes/course')
const { AdminRouter } = require('./routes/admin')

const app = express()

app.use('/api/v1/user', UserRouter)
app.use('/api/v1/admin', AdminRouter)
app.use('/api/v1/course', CourseRouter)


async function main() {
    mongoose.connect('mongodb+srv://muhammadaffan002ma:eo7JJbDA1ivAI8Ey@cluster0.kjx3l.mongodb.net/course-selling-app')
    app.listen(3000);
    console.log("app listening on port 3000")
}

main()


