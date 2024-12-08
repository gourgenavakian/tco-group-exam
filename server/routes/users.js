const express = require('express');
const router = express.Router();
const {authorizationUsers} = require('../middlewares/authorization');
const { registerUser, loginUser,  getProfile } = require('../controllers/UserController');
const { registerManager, loginManager } = require('../controllers/ManagerController');
// const {registerUser, editUser, deleteUser} = require('../controllers/UsersController');

/* GET users listing. */
router.get('/profile', authorizationUsers, getProfile, );

router.post('/admin/registration', registerUser);
router.post('/registration', registerUser);
router.post('/login', loginUser);
// router.post('/manager/login', loginManager);
// router.post('/admin/add-manager', registerManager);

module.exports = router;
