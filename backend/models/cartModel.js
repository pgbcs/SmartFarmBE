const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Customer = require("./customerModel");
const Product = require("./productModel");

const Cart = sequelize.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer, // Reference the Customer model directly
            key: 'id',       // Ensure this matches the primary key in Customer model
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,  // Reference the Product model directly
            key: 'id',       // Ensure this matches the primary key in Product model
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1,
        },
    },
    added_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'CART',
    timestamps: true,
    createdAt: 'added_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            fields: ['customer_id'],
        },
        {
            fields: ['product_id'],
        },
    ],
});

// Define associations from Cart to Customer and Product
Cart.belongsTo(Customer, {
    foreignKey: 'customer_id',
    as: 'Customer',
});

Cart.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'Product',
});

module.exports = Cart;
