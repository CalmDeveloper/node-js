const userRouter = require('express').Router()

const userController = require('./../user-controllers/user-controller')


userRouter.get('/',userController.getAll )

userRouter.get('/:userId', userController.getUserById)

userRouter.post('/', userController.createUser)


userRouter.delete('/:userId',userController.deleteUser)
userRouter.put('/:userId', userController.updateUser )

module.exports=userRouter