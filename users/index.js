const express = require('express')

const userRouter = require('./user-router/user-router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);
app.use('*', userRouter);

app.listen(4200)