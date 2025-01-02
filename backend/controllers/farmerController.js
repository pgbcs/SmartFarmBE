const FarmerService = require('../services/farmerService');
const {generateToken} = require('../middleware/authenticateJWT');
const { verifyPassword } = require('../utils/verifyPassword');
exports.Login = async function (req, res){
    try{
        const {username, password} = req.body;
        const farmer = await FarmerService.Login(username, password);
        if(!farmer){
            res.status(400).json({message: 'Invalid username or password'});
            return;
        }

        try{
            const isMatch = await verifyPassword(password, farmer.Password);
            if(!isMatch){
                res.status(400).json({message: 'Invalid username or password'});
                return;
            }
        }
        catch(error){
            res.status(400).json({message: error.message});
            return;
        }
        const payload = {
            id: farmer.id,
            username: farmer.Username,
            role: 'farmer'  
        }

        const response = {
            message: 'Login successfully',
            data:{
                id: farmer.id,
                username: farmer.Username,
                name: farmer.Name,
                address: farmer.Address,
                phone_number: farmer.Phone_number,
                role: 'farmer',
                token: generateToken(payload)
            }
        }

        res.status(200).json(response);
    }
    catch(error){
        // res.status(400).json({message: error.message});
        res.status(400).json({message: "Username or password is incorrect"});
    }
}

exports.Register = async function (req, res){
    try{
        const farmer = req.body;
        const farmerExist = await FarmerService.Login(farmer.Username, farmer.Password);
        if(farmerExist){
            res.status(400).json({message: 'Username is already taken'});
            return;
        }
        const result = await FarmerService.Register(farmer);
        res.status(200).json({
            message: 'Register successfully',
        });
    }catch(error){
        res.status(400).json({message: error.message});
        // res.status(400).json({message: "Register failed"});
    }
}