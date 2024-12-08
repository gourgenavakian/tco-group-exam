const {User} = require('../config/adminDB');

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
    }

}

module.exports = UserModel;