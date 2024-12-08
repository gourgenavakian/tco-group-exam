const {Admin} = require('../config/adminDB');


class UsersController {

    static registerUser = async (req, res) => {
        const user = req.body;

        try {
            const admin = await Admin.findOne();

            if (!admin) {
                return res.status(404).send({ message: "Admin not found" });
            }

            const referral = admin.Sales.find(sales => sales.username === user.referralsUsername);

            if (referral) {
                referral.users.push(user);
            }

            admin.users.push(user);

            await admin.save();

            return res.status(201).send({ message: "User registered successfully" });
        } catch (err) {
            console.error(err);
            return res.status(400).send({ message: "Error registering user" });
        }
    };

    static editUser = async (req, res) => {

    }

    static deleteUser = async (req, res) => {

    }
}

module.exports = UsersController;