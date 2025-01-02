const {hashPassword} = require('../utils/verifyPassword');
const FarmerModel = require('../models/farmerModel');

class FarmerService {
    async Login(username) {
        //check username and hash password
        return await FarmerModel.findOne({
            where: {
                Username: username
            }
        });
    }

    async Register(farmer) {
        const {Name, Address, Phone_number, Username, Password} = farmer;
        let hashedPassword;
        try{
            hashedPassword = await hashPassword(Password);
            console.log(hashedPassword.length);
        }
        catch(error){
            throw new Error('Error when hashing password');
        }
        return await FarmerModel.create({
            Name,
            Balance: 0,
            Address,
            Phone_number,
            Username,
            Password: hashedPassword
        });
    }
}


module.exports = new FarmerService();