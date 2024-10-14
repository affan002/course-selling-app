const express = require('express');
const jwt = require('jsonwebtoken');
const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const mongoose = require('mongoose');

const app = express();
app.use(express.json);


app.use('/user', userRouter);
app.use('/course', courseRouter);

app.listen(3000)