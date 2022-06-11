const express = require('express')

const app = express()
app.use(express.json())

app.listen(4200, () => {
    console.log('started on port 4200')
})