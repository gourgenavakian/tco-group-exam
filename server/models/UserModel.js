const {User} = require('../config/adminDB');
const {Types} = require('mongoose');
const {attachProduct} = require('./ProductModel');

class UserModel {

    static createUser = async (newUserData, user) => {
        if (typeof newUserData === 'object') {
            try {
                let newUserSetProduct = { ...newUserData };

                if (user && user.role === 'user') {
                    const productInfo = await attachProduct(user);

                    if (productInfo) {

                        if (!newUserSetProduct.purchases) {
                            newUserSetProduct.purchases = [];
                        }
                        newUserSetProduct.purchases.push(productInfo);
                    } else {
                        console.log('No product information found to attach.');
                        return null;
                    }
                }

                const newUser = new User(newUserSetProduct);

                await newUser.save();

                console.log('New User saved in DB: ', newUser);
                return newUser;

            } catch (err) {
                console.log('Error saving User: ', err);
            }
        }
    };

    static createReferredUser = async (newUserData, user) => {
        try {
            let referrer = null;
            let referralsUsername = user.referralsUsername;
            let creatorID = user.createdBy;

            if (referralsUsername) {
                referrer = await User.findOne({ username: referralsUsername });
            }
            if (!referrer && creatorID) {
                referrer = await User.findById(creatorID);
            }
            if (!referrer) {
                referrer = await User.findOne({ role: 'admin' }); // Найти администратора
            }

            if (!referrer) {
                console.log('No referrer found');
                return null;
            }

            newUserData.createdBy = new Types.ObjectId(referrer._id);



            const newUser = await this.createUser(newUserData, user);

            if (referrer.role !== 'admin') {
                referrer.managedUsers.push(newUser._id);
                await referrer.save();
            }

            console.log('Referred user created successfully:', newUser);
            return newUser;
        } catch (error) {
            console.error('Error in createReferredUser:', error);
            throw new Error('Referral process failed');
        }
    };


}

module.exports = UserModel;