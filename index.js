const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const { UserRouter } = require('./routes/user')
const { CourseRouter } = require('./routes/course')
const { AdminRouter } = require('./routes/admin')

const app = express()

app.use(express.json())

app.use('/api/v1/user', UserRouter)
app.use('/api/v1/admin', AdminRouter)
app.use('/api/v1/course', CourseRouter)


async function main() {
    mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("app listening on port 3000")
}

main()


