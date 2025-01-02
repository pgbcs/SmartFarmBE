const Cart = require("../models/cartModel")
const Product = require('../models/productModel');
const Customer = require("../models/customerModel")
const sequelize = require('../utils/db');
const { Model } = require("sequelize");


const addToCart = async (customerId, productId, quantity = 1) => {

    const customer = await Customer.findByPk(customerId);
    if (!customer) {
        throw new NotFoundError('Customer not found');
    }
    const product = await Product.findByPk(productId);
    
    if (!product) {
      throw new NotFoundError('Product not found');
    }

    const transaction = await Cart.sequelize.transaction();
    const existingCartItem = await Cart.findOne({
        where: {
          customer_id: customerId,
          product_id: productId,
        },
        transaction,
    });

    if (existingCartItem) {
        existingCartItem.quantity += quantity;
        await existingCartItem.save({ transaction });
        await transaction.commit();
        return {
            status:"UPDATE",
        };
      } else {
        const newCartItem = await Cart.create({
          customer_id: customerId,
          product_id: productId,
          quantity,
        }, { transaction });
        await transaction.commit();
        
        const updatedCart = await Cart.findAll({
            where: { customer_id: customerId },
            include: {
                model: Product,
                as: 'Product'
            },
        });

        return {
            status:"NEW",
            message:"Thêm mới thành công",
            cart: updatedCart
        };

      }
}


const getCartOfUser = async (customerId) => {
    try {
      const cartItems = await Cart.findAll({
        where: { customer_id: customerId },
        include: [{
          model: Product,
          as: 'Product'
        }]
      });
      return cartItems;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw error;
    }
};

module.exports = {addToCart,getCartOfUser}