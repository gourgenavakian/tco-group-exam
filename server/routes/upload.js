const express = require('express');
const multer = require('multer');
const path = require('path');
const {uploadImage} = require('../controllers/ImageController');

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const userDir = path.join(__dirname, '..', 'uploads');
        cb(null, userDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), uploadImage);

module.exports = router;
