const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const FarmModel = sequelize.define('Farm', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Location:{
        type: DataTypes.STRING,
    },
    Farmer_ID:{
        type: DataTypes.INTEGER,
        references:{
            model: 'Farmer',
            key: 'ID'
        }
    }
}, {
    tableName: 'FARM',
    timestamps: false
});

module.exports = Product;