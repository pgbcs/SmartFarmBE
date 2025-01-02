const Customer = require("../models/customerModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';

exports.login = async (req,res) => {
    const { Username, Password } = req.body;
    
    try {
        const customer = await Customer.findOne({ where: { Username } });

        if (!customer) {
            return res.status(404).json({ message: 'Tài khoản hoặc mật khẩu không đúng' });
        }

        if(Password != customer.Password){
            return res.status(404).json({ message: 'Tài khoản hoặc mật khẩu không đúng' });
        }

        const token = jwt.sign(
            {
                id: customer.ID,
                username: customer.Username,
                name: customer.Name,
            },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Đăng nhập thành công',
            token, 
            user: {
                id: customer.ID,
                username: customer.Username,
                name: customer.Name,
                balance: customer.Balance,
                address: customer.Address,
            },
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error})
    }
}