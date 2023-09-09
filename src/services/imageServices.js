const multer = require('multer')
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
        folder: (req, file) => {
            if (file.fieldname === "room_cover_image") {
                return 'roomCoverImage'
            } else if (file.fieldname === "room_picture") {
                return 'roomPortfolioImages'
            } else if (file.fieldname === "profile_photo") {
                return 'profilePhoto'
            } else if (file.fieldname === "adhaar_card_image") {
                return 'adhaarCardImage'
            } else if (file.fieldname === "signature_photo") {
                return 'signaturePhoto'
            }
        },
        allowedFormats: ['jpg', 'png']
    },
});

const upload = multer({ storage: storage })

module.exports = upload 