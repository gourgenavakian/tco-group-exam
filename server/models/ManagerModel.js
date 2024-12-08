const {Manager} = require('../config/managerDB');

class ManagerModel {

    static createManager = async (manager) => {
        if (typeof manager === 'object') {
            try{
                const newManager = new Manager(manager);
                await newManager.save();
                console.log('New Manager saved on DB: ', newManager);


            }catch(err){
                console.log('Error saving Manager: ', err);
            }
        }
    }
}

module.exports = ManagerModel;