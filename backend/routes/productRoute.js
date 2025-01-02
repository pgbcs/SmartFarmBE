const express = require("express");
const router = express.Router();

class ProductRoute{
    constructor(){
        this.productController = require('../controllers/productController');
    }
    routes(){
        router.get('/getProductsNotSold', this.productController.getProductsNotSold);
        
        router.get('/getProductById', this.productController.getProductById);
        router.get('/searchProduct', this.productController.searchProduct);
        router.get('/getProductsByGenType', this.productController.getProductsByGenType);
        router.get('/getProductsByOrderedPrice', this.productController.getProductsByOrderedPrice);

        router.post('/addCrop', this.productController.addCrop);
        router.post('/addAqua', this.productController.addAqua);
        router.post('/addPoultry', this.productController.addPoultry);
        router.post('/addLiveStock', this.productController.addLivestock);

        router.delete('/deleteProduct', this.productController.deleteProduct);
        return router;
    }
}

module.exports = new ProductRoute().routes();