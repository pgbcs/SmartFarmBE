const express = require("express");
const router = express.Router();

class cusRoute{
    constructor(){
        this.cusController = require('../controllers/customerController');
    }
    routes(){
        router.post('/login', this.cusController.login);

        return router;
    }
}

module.exports = new cusRoute().routes();