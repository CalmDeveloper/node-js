const express = require('express')

const userRouter = require("./user-router/user-router")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);
app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.listen(4200,() => {
    console.log('Server listen 4200')
})