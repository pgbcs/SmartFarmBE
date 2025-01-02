const express = require("express");
const router = express.Router();

class FarmerRoute{
    constructor(){
        this.farmerController = require('../controllers/farmerController');
    }
    routes(){
        router.post('/login', this.farmerController.Login);
        router.post('/register', this.farmerController.Register);
        return router;
    }
}

module.exports = new FarmerRoute().routes();