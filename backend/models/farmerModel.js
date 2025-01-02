const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const FarmerModel = sequelize.define('Farmer', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name:{
        type: DataTypes.STRING,
    },
    Balance:{
        type: DataTypes.INTEGER,
    },
    Address:{
        type: DataTypes.STRING,
    },
    Phone_number:{
        type: DataTypes.STRING,
    },
    Username:{
        type: DataTypes.STRING,
    },
    Password:{
        type: DataTypes.STRING,
    }
}, {
    tableName: 'FARMER',
    timestamps: false
});

module.exports = FarmerModel;