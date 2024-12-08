const {Admin} = require('../config/adminDB');

class AdminModel {

    static createAdmin = async (admin) => {
        if (typeof admin === 'object') {
            try{
                const newAdmin = new Admin(admin);
                await newAdmin.save();
                console.log('New Admin saved on DB: ', newAdmin);

            }catch(err){
                console.log('Error saving Admin: ', err);
            }
        }
    }

}

module.exports = AdminModel;