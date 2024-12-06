const express = require('express');
const router = express.Router();
const {authorizationUsers} = require('../middlewares/authorization');
const { registerUsers, loginUsers, getProfile } = require('../controllers/UsersController');

/* GET users listing. */
router.post('/registration', registerUsers);
router.post('/login', loginUsers);

module.exports = router;
