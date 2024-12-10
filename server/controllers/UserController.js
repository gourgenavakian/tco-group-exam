const { User } = require('../config/adminDB');
const {createUser} = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Types} = require("mongoose");


class UserController {

    static getUser = async (req, res) => {
        try {

            const data = await User.find();
            return res.status(200).json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to retrieve users' });
        }
    };

    static registerUser = async (req, res) => {
        const user = req.body;
        console.log('Received user data:', user);

        try {

            if ((!user.email || !user.password || !user.username || !user.fullName || !user.gender) && (user.role === 'admin' || user.role === 'manager')) {
                return res.status(400).json({ message: 'Required fields are missing' });
            }

            const existingUser = await User.findOne({ email: user.email });
            if (existingUser) {
                return res.status(409).json({ message: 'User with this email already exists' });
            }

            let hashedPassword;
            if (user.role === 'admin' || user.role === 'manager') hashedPassword = bcrypt.hashSync(user.password, 10);


            const newUserData = {
                email: user.email,
                username: user.username,
                fullName: user.fullName,
                gender: user.gender,
                password: hashedPassword,
                passportID: user.passportID || null,
                city: user.city || null,
                country: user.country || null,
                card: {
                    number: user.card?.number || null,
                    expirationDate: user.card?.expirationDate || null,
                    cvv: user.card?.cvv || null,
                },
                managedUsers: user.managedUsers,
                avatar: user.avatar || null,
                role: user.role || 'user',
                createdBy: new Types.ObjectId(user.createdBy) || null,
                createdAt: new Date().toISOString(),
                isActive: user.isActive || null,
            };

            if (user.referralsUsername) {
                const referredUser = await User.findOne({ username: user.referralsUsername, role: 'manager' });
                if (referredUser) {

                    newUserData.createdBy = referredUser._id;
                    const newUser = await createUser(newUserData);
                    referredUser.managedUsers.push(newUser._id);
                    await referredUser.save();

                    return res.status(201).json({
                        message: 'Registration successful',
                        user: {
                            id: newUser._id,
                            email: newUser.email,
                            role: newUser.role,
                        },
                    });
                } else {
                    return res.status(404).json({ message: 'Referred manager not found' });
                }
            }

            const admin = await User.findOne({role: 'admin'});
            newUserData.createdBy = admin._id;
            const newUser = await createUser(newUserData);

            res.status(201).json({
                message: 'Registration successful',
                user: {
                    id: newUser._id,
                    email: newUser.email,
                    role: newUser.role,
                },
            });
            console.log('Registration successful');
        } catch (err) {
            console.error('Error during registration:', err);
            res.status(500).json({ message: 'Something went wrong', error: err.message });
        }
    };

    static loginUser = async (req, res) => {
        const { username, password, role } = req.body;

        try {

            const user = await User.findOne({ username });

            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }


            const isPasswordValid = bcrypt.compareSync(password, user.password) && username === user.username && role === user.role;
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

module.exports = UserController;