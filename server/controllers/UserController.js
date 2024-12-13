const { User } = require('../config/adminDB');
const {createUser, createReferredUser} = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



class UserController {

    static getUsers = async (req, res) => {
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

            if ((!user.email || !user.password || !user.username || !user.fullName || !user.gender) && user.role !== 'user') {
                return res.status(400).json({ message: 'Required fields are missing' });
            }

            const existingUser = await User.findOne({ email: user.email });
            if (existingUser) {
                return res.status(409).json({ message: 'User with this email already exists' });
            }


            const hashedPassword = user.password ? await bcrypt.hash(user.password, 10) : null;

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
                    cvc: user.card?.cvc || null,
                },
                managedUsers: user.role === 'manager' ? [] : undefined,
                avatar: user.avatar || null,
                role: user.role || 'user',
                createdBy: null,
                income: user.role === 'user' ? undefined : 0,
                purchases: user.role === 'user' ? [] : undefined,
                totalPrice: 0,
                createdAt: new Date().toISOString(),
                isActive: user.isActive || false,
            };

            let createdUser;

            if (user.role !== 'admin') {
                createdUser = await createReferredUser(newUserData, user);
            } else {
                createdUser = await createUser(newUserData, user);
            }

            if (!createdUser) {
                return res.status(500).json({ message: 'Error during user creation' });
            }

            res.status(201).json({
                message: 'Registration successful',
                user: { id: createdUser._id, email: createdUser.email, role: createdUser.role },
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