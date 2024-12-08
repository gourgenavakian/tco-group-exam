const express = require('express');
const router = express.Router();
const {authorizationUsers} = require('../middlewares/authorization');
const { registerAdmin, loginAdmin,  getProfile, registerManager } = require('../controllers/AdminController');

/* GET users listing. */
router.get('/profile', authorizationUsers, getProfile);

router.post('/admin/registration', registerAdmin);
router.post('/admin/add-manager', registerManager);
router.post('/registration', registerAdmin);
router.post('/login', loginAdmin);

module.exports = router;
