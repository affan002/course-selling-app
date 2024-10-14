const express = require('express');
const jwt = require('jsonwebtoken');
const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')
const mongoose = require('mongoose');

const app = express();

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

app.listen(3000)