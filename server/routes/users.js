const express = require('express');
const router = express.Router();
const {authorizationUsers} = require('../middlewares/authorization');
const { registerUsers, loginUsers, getProfile } = require('../controllers/AdminController');

/* GET users listing. */
router.get('/profile', authorizationUsers, getProfile);

router.post('/registration', registerUsers);
router.post('/login', loginUsers);

module.exports = router;
