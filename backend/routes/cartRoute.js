

const express = require("express");
const { route } = require("./productRoute");
const router = express.Router();

class cartRoute{
    constructor(){
        this.cartController = require('../controllers/cartController');
    }
    routes(){
        router.post('/add', this.cartController.addToCart);

        router.post("/get-cart",this.cartController.getCartOfUser)
        

        return router;
    }
}



module.exports = new cartRoute().routes();