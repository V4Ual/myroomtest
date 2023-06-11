const route = require('express').Router()
const userRouter = require('./allroutes/user.routes')
const roomRouter = require('./allroutes/room.routes')

route.use('/user', userRouter)
route.use('/room', roomRouter)



module.exports = route