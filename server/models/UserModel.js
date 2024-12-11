const {User} = require('../config/adminDB');
const {Types} = require('mongoose');

class UserModel {

    static createUser = async (user) => {
        if (typeof user === 'object') {
            try{
                const newUser = new User(user);
                await newUser.save();

                console.log('New User saved on DB: ', newUser);
                return newUser;

            }catch(err){
                console.log('Error saving User: ', err);
            }
        }
    };

    static createReferredUser = async (user, referralsUsername, creatorID) => {
        try {
            let referrer = null;

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

            user.createdBy = new Types.ObjectId(referrer._id);

            const newUser = await this.createUser(user);

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