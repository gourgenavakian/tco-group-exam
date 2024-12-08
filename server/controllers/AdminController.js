const { Admin } = require('../config/adminDB');
const {createAdmin} = require('../models/AdminModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Manager} = require("../config/managerDB");
const {createManager} = require('../models/ManagerModel')

class AdminController {

    static getAdmin = async (req, res) => {
        try {

            const data = await Admin.find();
            return res.status(200).json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to retrieve users' });
        }
    };

    static registerAdmin = async (req, res) => {
        const admin = req.body;
        console.log(admin);
        try {
            if (admin) {

                const existingUser = await Admin.findOne({ email: admin.email });
                console.log('existingUser', existingUser);

                if (existingUser) {
                    res.status(200).send('User already exists');
                    console.log('User already exists');
                } else {

                    await createAdmin({...admin, password: bcrypt.hashSync(admin.password, 10), options: 'admin' });
                    res.status(200).json({message: 'Registration successfully'});
                    console.log('Registration successful');
                }
            }
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });
            console.error(err);
        }
    };

    static loginAdmin = async (req, res) => {
        const { username, password, options } = req.body;

        try {

            const admin = await Admin.findOne({ username });

            if (!admin) {
                return res.status(400).json({ message: 'User not found' });
            }


            const isPasswordValid = bcrypt.compareSync(password, admin.password) && username === admin.username;
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Wrong email or password' });
            }


            const token = jwt.sign(
                { userId: admin._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1h' }
            );

            res.status(200).json({ token, admin });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };

    static getProfile = async (req, res) => {

        const userId = req.user.userId

        try {
            const admin = await Admin.findOne({ _id: userId });
            if (!admin) return res.status(404).json({ message: "User not found" });

            res.status(200).json(admin);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Server error' });
        }
    };

    static getManager = async (req, res) => {
        try {
            const data = await Manager.find();
            return res.status(200).json(data);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to retrieve users' });
        }
    }

    static registerManager = async (req, res) => {
        const manager = req.body;
        console.log(manager);
        try {
            if (manager) {

                const existingManager = await Admin.findOne({ email: manager.email });
                console.log('existingUser', existingManager);

                if (existingManager) {
                    res.status(200).send('User already exists');
                    console.log('User already exists');
                } else {

                    await createManager({...manager, password: bcrypt.hashSync(manager.password, 10), options: 'manager' });
                    res.status(200).json({message: 'Registration successfully'});
                    console.log('Registration successful');
                }
            }
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });
            console.error(err);
        }
    }


}

module.exports = AdminController;