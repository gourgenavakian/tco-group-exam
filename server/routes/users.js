const express = require('express');
const router = express.Router();
const {authorizationUsers} = require('../middlewares/authorization');
const { getUsers, registerUser, loginUser,  getProfile } = require('../controllers/UserController');

/* GET users listing. */
router.get('/', getUsers);
router.get('/profile', authorizationUsers, getProfile, );

router.post('/admin/registration', registerUser);
router.post('/registration', registerUser);
router.post('/login', loginUser);


module.exports = router;
