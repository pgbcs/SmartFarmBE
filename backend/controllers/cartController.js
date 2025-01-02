const Cart = require("../models/cartModel")
const CartService = require("../services/cartService")

module.exports.addToCart = async(req,res) => {
    const { customerId, productId } = req.body;
    
    console.log(customerId,productId)

    try {
        if (!customerId || !productId) {
            throw new ValidationError('Customer ID and Product ID are required');
        }

        const cartItem = await CartService.addToCart(customerId, productId);

        res.status(200).json(cartItem)

    } catch (error) {
        console.log(error)
    }
}

module.exports.getCartOfUser = async(req,res) => {
    const {customerId} = req.body 
    try {
        console.log("customer id: ", customerId)
        const prodOfCus = await CartService.getCartOfUser(customerId)
        res.status(200).json(prodOfCus)
    } catch (error) {
        console.log(error)
    }
}
