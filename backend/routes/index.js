const productRouter = require('./productRoute');
const farmRouter = require('./farmRoute');
const cusRoute = require("./cusRoute")
const cartRoute = require("./cartRoute")

function routes(app){
    app.use('/products', productRouter);
    app.use('/farms', farmRouter);
    app.use('/customer',cusRoute);
    app.use('/cart',cartRoute);
}

module.exports = routes;