const { Manager } = require("../config/managerDB");
const bcrypt = require("bcrypt");
const {createManager}= require('../models/ManagerModel')
const {Admin} = require("../config/adminDB");
const jwt = require("jsonwebtoken");

class ManagerController {

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
        const managers = req.body;
        console.log(managers);
        try {
            if (managers) {

                const existingManager = await Manager.findOne({ email: managers.email });
                console.log('existingManager', existingManager);

                if (existingManager) {
                    res.status(200).send('User already exists');
                    console.log('User already exists');
                } else {
                    await createManager({ ...managers, password: bcrypt.hashSync(managers.password, 10), options: 'manager' });
                    res.status(200).json({ message: 'Registration successful' });
                    console.log('Registration successful');
                }
            }
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });
            console.error(err);
        }
    }

    static loginManager = async (req, res) => {
        const { username, password, options } = req.body;

        try {

            const manager = await Manager.findOne({username: username});

            if (!manager) {
                return res.status(400).json({ message: 'User not found' });
            }


            const isPasswordValid = bcrypt.compareSync(password, manager.password) && username === manager.username;
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Wrong email or password' });
            }


            const token = jwt.sign(
                { userId: manager._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1h' }
            );

            res.status(200).json({ token, manager });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };



}

module.exports = ManagerController;
