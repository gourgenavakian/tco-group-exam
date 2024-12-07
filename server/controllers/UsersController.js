const { User } = require('../config/userDB');
const {createUser} = require('../models/UsersModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


class UsersController {

    static getUsers = async (req, res) => {
        try {

            const data = await User.find();
            return res.status(200).json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to retrieve users' });
        }
    };

    static registerUsers = async (req, res) => {
        const user = req.body;
        console.log(user);
        try {
            if (user) {

                const existingUser = await User.findOne({ email: user.email });
                console.log('existingUser', existingUser);

                if (existingUser) {
                    res.status(200).send('User already exists');
                    console.log('User already exists');
                } else {

                    await createUser({...user, password: bcrypt.hashSync(user.password, 10), options: 'admin' });
                    res.status(200).json({message: 'Registration successfully'});
                    console.log('Registration successful');
                }
            }
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });
            console.error(err);
        }
    };

    static loginUsers = async (req, res) => {
        const { username, password, options } = req.body;

        try {

            const user = await User.findOne({ username });

            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }


            const isPasswordValid = bcrypt.compareSync(password, user.password) && username === user.username;
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Wrong email or password' });
            }


            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1h' }
            );

            res.status(200).json({ token, user });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };

    static getProfile = async (req, res) => {

        const userId = req.user.userId

        try {
            const user = await User.findOne({ _id: userId });
            if (!user) return res.status(404).json({ message: "User not found" });

            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Server error' });
        }
    };

}

module.exports = UsersController;