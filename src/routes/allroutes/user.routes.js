const userRouter = require('express').Router()
const UserController = require('../../controller/userController/user.controller')

const userController = new UserController()


userRouter.post('/create_user', async (req, res) => {
    const result = await userController.createUser(req, res)
    res.send(result)
})

userRouter.post('/login', async (req, res) => {
    const result = await userController.login(req, res)
    res.send(result)
})

userRouter.post('/sent-otp', async (req, res) => {
    const result = await userController.sendOtp(req, res)
    res.send(result)
})

userRouter.post('/otp-verify', async (req, res) => {
    const result = await userController.otpVerify(req, res)
    res.send(result)
})



userRouter.get('/get_role', async (req, res) => {
    const result = await userController.getRole(req, res)
    res.send(result)
})




module.exports = userRouter