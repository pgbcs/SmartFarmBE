const express = require("express");
const router = express.Router();

class FarmRoute{
    constructor(){
        this.farmController = require('../controllers/farmController');
    }
    routes(){
        router.get('/getFarms', this.farmController.getFarms);
        router.get('/getFarmById', this.farmController.getFarmById);
        router.get('/searchFarm', this.farmController.searchFarm);
        
        router.post('/addFarm', this.farmController.addFarm);

        router.put('/updateFarm', this.farmController.updateFarm);

        router.delete('/deleteFarm', this.farmController.deleteFarm);

        return router;
    }
}

module.exports = new FarmRoute().routes();