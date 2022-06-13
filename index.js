const express = require('express')
const {fileService} = require('./services')

const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
    const users = await fileService.reader()
    res.json(users)

})
app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fileService.reader()
    if (typeof +userId === 'number' && +userId % 1 === 0) {
        const findUser = users.find((user) => user.id === +userId)
        if (findUser) {
            res.json(findUser)
        } else {
            res.status(404).json(`user with userId ${+userId} no found`)
            res.end()
        }
    } else {
        res.status(400).json(`enter valid userId`)
        res.end()
    }
})

app.post('/users',async (req, res) => {
    const {name,age} = req.body
if (typeof name !=="string" && name.length<3){
    res.status(400).json('enter valid username')
    res.end()
}
if (typeof +age !== 'number' && +age % 1 !== 0 && age<0 || age>130){
    res.status(400).json('enter valid age')
    res.end()
}
    const users = await fileService.reader()
    const lastId = users[users.length-1]
    const newUser = {id:lastId.id+1, name,age}
const newUsers = {...users,newUser}
    const addUser = await fileService.writer(newUsers)
    res.json(`user ${newUser} created!`)
})
app.listen(4200, () => {
    console.log('started on port 4200')
})
