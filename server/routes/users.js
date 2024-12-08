const express = require('express');
const router = express.Router();
const {authorizationUsers} = require('../middlewares/authorization');
const { registerAdmin, loginAdmin,  getProfile } = require('../controllers/AdminController');
const { registerManager } = require('../controllers/ManagerController');

/* GET users listing. */
router.get('/profile', authorizationUsers, getProfile, );

router.post('/admin/registration', registerAdmin);
router.post('/registration', registerAdmin);
router.post('/login', loginAdmin);
router.post('/admin/add-manager', registerManager);

module.exports = router;

