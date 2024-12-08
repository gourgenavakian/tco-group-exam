const { Manager } = require("../config/managerDB");
const bcrypt = require("bcrypt");
const {createManager}= require('../models/ManagerModel')

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
        const manager = req.body;
        console.log(manager);
        try {
            if (manager) {

                const existingManager = await Manager.findOne({ email: manager.email });
                console.log('existingUser', existingManager);

                if (existingManager) {
                    res.status(200).send('User already exists');
                    console.log('User already exists');
                } else {
                    await createManager({ ...manager, password: bcrypt.hashSync(manager.password, 10), options: 'manager' });
                    res.status(200).json({ message: 'Registration successful' });
                    console.log('Registration successful');
                }
            }
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });
            console.error(err);
        }
    }


}

module.exports = ManagerController;
