const {fileService} = require("../user-services") ;

const getAll = async (req, res) => {
    try {
        const users = await fileService.reader()
        return res.json(users)
    } catch (e) {
        res.status(400).json(e.message || 'Unknown Error');
    }
}


const getUserById = async (req, res) => {
    try {
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
    }
    catch (e) {
        res.status(400).json(e.message || 'Unknown Error');
    }
}

const createUser = async (req, res) => {
    try {
        const {name, age} = req.body
        if (typeof name !== "string" && name.length < 3) {
            return res.status(400).json('enter valid username')
        }
        if (typeof +age !== 'number' && +age % 1 !== 0 && age < 0 || age > 130) {
            return res.status(400).json('enter valid age')
        }
        const users = await fileService.reader()
        const lastUser = users[users.length - 1]
        const newUser = {id: users.length ? lastUser.id + 1 : 1, name, age}
        const newUsers = [...users, {id: users.length ? lastUser.id + 1 : 1, name, age}]
        await fileService.writer(newUsers)
        return res.json(`user: id: ${newUser.id}, name: ${newUser.name}, age:${newUser.age}  created!`)
    } catch (e) {
        res.status(400).json(e.message || 'Unknown Error');
    }
}
const deleteUser =  async (req, res) => {
    try{
        const {userId} = req.params;
        const users = await fileService.reader()
        if (typeof +userId === 'number' && +userId % 1 === 0) {
            const findIndex = users.findIndex((user) => user.id === +userId)
            if (findIndex === -1) {
                return res.status(404).json(`user with userId ${+userId} no found`)
            } else {
                users.splice(findIndex, 1)
                 await fileService.writer(users)
                return res.json('user was deleted!')
            }
        } else {
            return res.status(400).json(`enter valid userId`)
        }
    }catch (e) {
        res.status(400).json(e.message || 'Unknown Error');
    }
}
const updateUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const {name, age} = req.body
        const users = await fileService.reader()

        if (typeof name !== "string" && name.length < 3) {
            return res.status(400).json('enter valid username')
        }
        if (typeof +age !== 'number' && +age % 1 !== 0 && age < 0 || age > 130) {
            return res.status(400).json('enter valid age')
        }
        if (typeof +userId !== 'number' && +userId % 1 !== 0) {
            return res.status(400).json(`enter valid userId`)
        }
        const findIndex = users.findIndex((user) => user.id === +userId)
        if (findIndex === -1) {
            return res.status(404).json(`user with userId ${+userId} no found`)
        }


        const index = users.findIndex(user => user.id === +userId)
        const updatedUser = Object.assign(users[index], req.body)
        users.splice(index,1)
        await fileService.writer([...users, updatedUser])
        return res.json(`user: id: ${updatedUser.id}, name: ${updatedUser.name}, age:${updatedUser.age}  updated!`)
    }catch (e) {
        res.status(400).json(e.message || 'Unknown Error');
    }
}


module.exports = {
    getAll,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
}