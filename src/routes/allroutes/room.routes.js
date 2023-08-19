const roomRouter = require('express').Router()
const upload = require('../../services/imageServices')
const RoomController = require('../../controller/roomController/roomController')
const multer = require('multer')


const roomController = new RoomController()




roomRouter.get('/get_room_details', async (req, res) => {
    const result = await roomController.getRoomDetails(req, res)
    res.send(result)
})

roomRouter.get('/get_room_type', async (req, res) => {
    const result = await roomController.getRoomTypes(req, res)
    res.send(result)
})

roomRouter.post('/add_room', upload, async (req, res) => {
    const result = await roomController.createRoom(req, res)
    res.send(result)
})

roomRouter.put('/edit_room', upload, async (req, res) => {
    const result = await roomController.editRoomDetails(req, res)
    res.send(result)
})






module.exports = roomRouter