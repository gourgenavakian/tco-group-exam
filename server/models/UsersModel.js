const {User} = require('../config/userDB');

class UserModel {

    static createUser = async (user) => {
        if (typeof user === 'object') {
            try{
                const newUser = new User(user);
                await newUser.save();
                console.log('New user saved on DB: ', newUser);

            }catch(err){
                console.log('Error saving user: ', err);
            }
        }
    }

}

module.exports = UserModel;