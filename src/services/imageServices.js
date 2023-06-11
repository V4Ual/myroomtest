const multer = require('multer')
const path = require('path')

console.log(path.join(__dirname,'../../public/roomPortfolioImages'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'room_picture') {
            cb(null, path.join(__dirname, "../../public/roomPortfolioImages"));
        } else if (file.fieldname === 'room_cover_image') {
            cb(null, path.join(__dirname, "../../public/roomCoverImage"));
        }
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Only image file upload");
    }
}).fields([{name:'room_cover_image'},{name:'room_picture'}]);


module.exports = upload