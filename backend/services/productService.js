const ProductModel = require('../models/productModel');
const sequelize = require('../utils/db');
const {findBestMatchColumn} = require('../utils/search');

class ProductService {
    async getProductsNotSold(limit, offset) {
        return await ProductModel.findAndCountAll({
            limit,
            offset,
            where: {
                Status: 'not sold'
            }
        });
    }
    async getProductById(id) {
        return await ProductModel.findByPk(id);
    }

    async searchProduct(keyword, limit, offset) {
        return await findBestMatchColumn(ProductModel, ['Type', 'Breed', 'gen_type'], keyword, limit, offset);
    }

    async getProductsByGenType(type, limit, offset, sortOpt) {
        return await ProductModel.findAndCountAll({
            where: {
                gen_type: type
            },
            order: [
                ['Price', sortOpt=='ASC'?'ASC':'DESC']
            ],
            limit,
            offset
        });
    }

    async getProductsByOrderedPrice(limit, offset, sortOpt='ASC') {
        return await ProductModel.findAndCountAll({
            order: [
                ['Price', sortOpt=='ASC'?'ASC':'DESC']
            ],
            limit,
            offset
        });
    }

    async addCrop(product) {
        const {Start_date, Type, Breed, Price, Growth_time, Area, Estimated_harvesting_cost, Soil_ID } =product;
        return  await sequelize.query('CALL insert_crop(:p1, :p2, :p3, :p4, :p5, :p6, :p7, :p8)',{
                replacements:{
                    p1: Start_date,
                    p2: Type,
                    p3: Breed,
                    p4: Price,
                    p5: Growth_time,
                    p6: Area,
                    p7: Estimated_harvesting_cost,
                    p8: Soil_ID 
                }
            })
    }

    async addAqua(product){
        const  { Start_date, Type, Breed, Price, Growth_time, Pond_ID } = product;
        return await sequelize.query('CALL insert_aqua(:p1, :p2, :p3, :p4, :p5, :p6)',{
            replacements:{
                p1: Start_date,
                p2: Type,
                p3: Breed,
                p4: Price,
                p5: Growth_time,
                p6: Pond_ID
            }
        });
    }

    async addPoultry(product){
        const { Start_date, Type, Breed, Price, Growth_time, Gender, Start_weight, shelter_ID,Egg } = product;
        return await sequelize.query('CALL insert_poultry(:p1, :p2, :p3, :p4, :p5, :p6, :p7, :p8, :p9',{
            replacements:{
                p1: Start_date,
                p2: Type,
                p3: Breed,
                p4: Price,
                p5: Growth_time,
                p6: Gender, 
                p7: Start_weight,
                p8: shelter_ID,
                p9: Egg
        }});
    }

    async addLivestock(product){
        const { Start_date, Type, Breed, Price, Growth_time, Gender, Start_weight, shelter_ID } = product;
        return await sequelize.query('CALL insert_livestock(:p1, :p2, :p3, :p4, :p5, :p6, :p7, :p8)',{
            replacements:{
                p1: Start_date,
                p2: Type,
                p3: Breed,
                p4: Price,
                p5: Growth_time,
                p6: Gender,
                p7: Start_weight,
                p8: shelter_ID
            }
        });
    }

    async deleteProduct(id){
        return await ProductModel.destroy({
            where: {
                ID: id
            }
        });
    }
}

module.exports = new ProductService();