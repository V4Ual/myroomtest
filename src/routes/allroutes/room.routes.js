const roomRouter = require('express').Router()
// const upload = require('../../services/imageServices')
const RoomController = require('../../controller/roomController/roomController')
const multer = require('multer')


const roomController = new RoomController()
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const CLOUD_NAME = process.env.CLOUD_NAME
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET


cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: (req, file, cb) => {
            if (file.fieldname === "room_cover_image") {
                return 'roomCoverImage'
            } else if (file.fieldname === "room_picture") {
                return 'roomPortfolioImages'
            }
        },
        allowedFormats: ['jpg', 'png']

    },
});

const upload = multer({ storage: storage }).fields([{ name: 'room_cover_image', maxCount: 1 }, { name: 'room_picture', maxCount: 10 }])



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