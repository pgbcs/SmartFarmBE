const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const ProductModel = sequelize.define('Product', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Start_date:{
        type: DataTypes.DATE,
    },
    Type:{
        type: DataTypes.STRING,
    },
    Breed:{
        type: DataTypes.STRING,
    },
    Status:{
        type: DataTypes.STRING,
    },
    Price:{
        type: DataTypes.INTEGER,
    },
    Growth_time:{
        type: DataTypes.DATE
    },
    Order_ID:{
        type: DataTypes.INTEGER,
        references:{
            model: 'Orders',
            key: 'ID'
        }
    },
    Main_ID:{
        type: DataTypes.INTEGER,
        references:{
            model: 'Product',
            key: 'ID'
        }
    },
    Discount:{
        type: DataTypes.INTEGER,
    },
    Delivery_time:{
        type: DataTypes.DATE,
    },
    gen_type:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
    }
}, {
    tableName: 'PRODUCT',
    timestamps: false
});

module.exports = ProductModel;