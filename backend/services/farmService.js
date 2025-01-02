const FarmModel = require('../models/farmModel');
const {findBestMatchColumn} = require('../utils/search');

class FarmService {
    
    async getFarms(limit, offset) {
        return await FarmModel.findAndCountAll({
            limit,
            offset,
        });
    }

    async getFarmById(id) {
        return await FarmModel.findByPk(id);
    }

    async searchFarm(keyword, limit, offset) {
        return await findBestMatchColumn(FarmModel, ['Location'], keyword, limit, offset);
    }

    async addFarm(farm) {
        const {Location, Farmer_ID} = farm;
        return await FarmModel.create({
            Location,
            Farmer_ID
        });
    }

    async updateFarm(farm) {
        const {ID, Location, Farmer_ID} = farm;
        return await FarmModel.update({
            Location,
            Farmer_ID
        }, {
            where: {
                ID
            }
        });
    }

    async deleteFarm(id) {
        return await FarmModel.destroy({
            where: {
                ID: id
            }
        });
    }

    
}