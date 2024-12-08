const {Manager} = require('../config/managerDB');
const {Admin} = require('../config/adminDB');

class ManagerModel {

    static createManager = async (managers) => {

        if (typeof managers === 'object') {
            try{
                const newManager = new Manager(managers);
                await newManager.save();
                console.log('New Manager saved on DB: ', newManager);

                const admin = await Admin.findOne();
                admin.managers.push({id: newManager._id, username: newManager.username});
                await admin.save();
                console.log('Manager added to Admin:', admin);



            }catch(err){
                console.log('Error saving Manager: ', err);
            }
        }
    }
}

module.exports = ManagerModel;