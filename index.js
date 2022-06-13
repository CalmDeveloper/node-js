const express = require('express')
const {fileService} = require('./services')

const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
    const users = await fileService.reader()
    return res.json(users)

})
app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fileService.reader()
    if (typeof +userId === 'number' && +userId % 1 === 0) {
        const findUser = users.find((user) => user.id === +userId)
        if (findUser) {
            return res.json(findUser)
        } else {
            return res.status(404).json(`user with userId ${+userId} no found`)
        }
    } else {
        return res.status(400).json(`enter valid userId`)
    }
})

app.post('/users', async (req, res) => {
    const {name, age} = req.body
    if (typeof name !== "string" && name.length < 3) {
        return res.status(400).json('enter valid username')
    }
    if (typeof +age !== 'number' && +age % 1 !== 0 && age < 0 || age > 130) {
        return res.status(400).json('enter valid age')
    }
    const users = await fileService.reader()
    const lastId = users[users.length - 1]
    const newUser = {id: lastId.id + 1, name, age}
    const newUsers = [...users, {id: lastId.id + 1, name, age}]
    await fileService.writer(newUsers)
    return res.json(`user: id: ${newUser.id}, name: ${newUser.name}, age:${newUser.age}  created!`)
})


app.delete('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fileService.reader()
    if (typeof +userId === 'number' && +userId % 1 === 0) {
        const findIndex = users.findIndex((user) => user.id === +userId)
        if (findIndex === -1) {
            return res.status(404).json(`user with userId ${+userId} no found`)
        } else {
            res.json('user was deleted!')
            users.splice(findIndex, 1)
            return await fileService.writer(users)
        }
    } else {
        return res.status(400).json(`enter valid userId`)
    }
})
app.put('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const {name, age} = req.body
    const users = await fileService.reader()
    if (typeof +userId !== 'number' && +userId % 1 !== 0) {
        return res.status(400).json(`enter valid userId`)
    }
    const findIndex = users.findIndex((user) => user.id === +userId)
    if (findIndex === -1) {
        return res.status(404).json(`user with userId ${+userId} no found`)
    }

    if (typeof name !== "string" && name.length < 3) {
        return res.status(400).json('enter valid username')
    }
    if (typeof +age !== 'number' && +age % 1 !== 0 && age < 0 || age > 130) {
        return res.status(400).json('enter valid age')
    }
    const index = users.findIndex(user => user.id === +userId)
    const updatedUser = Object.assign(users[index], req.body)
    users.splice(index,1)
    await fileService.writer([...users, updatedUser])
    return res.json('user updated')
})
app.listen(4200, () => {
    console.log('started on port 4200')
})


