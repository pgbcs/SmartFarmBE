const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Customer = sequelize.define('Customer', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING(50), // Matches varchar(50)
        allowNull: true,
    },
    Phone_number: {
        type: DataTypes.STRING(10), // Matches varchar(10)
        allowNull: true,
    },
    Balance: {
        type: DataTypes.INTEGER, // Matches int
        allowNull: false,
        defaultValue: 0,
    },
    Address: {
        type: DataTypes.STRING(255), // Matches varchar(255)
        allowNull: true,
    },
    Username: {
        type: DataTypes.STRING(45), // Matches varchar(45)
        allowNull: true,
        unique: true, // Matches UNIQUE constraint
    },
    Password: {
        type: DataTypes.STRING(45), // Matches varchar(45)
        allowNull: true,
    },
}, {
    tableName: 'CUSTOMER', // Explicit table name as it is case-sensitive
    timestamps: false, // No createdAt or updatedAt columns
});

module.exports = Customer