const express = require('express');
const router = express.Router();
const {authorizationUsers} = require('../middlewares/authorization');
const { registerAdmin, loginAdmin,  getProfile } = require('../controllers/AdminController');
const {registerUser, editUser, deleteUser} = require('../controllers/UsersController');

/* GET users listing. */
router.get('/profile', authorizationUsers, getProfile);

router.post('/admin/registration', registerAdmin);
router.post('/registration', registerUser);
router.post('/login', loginAdmin);

module.exports = router;
