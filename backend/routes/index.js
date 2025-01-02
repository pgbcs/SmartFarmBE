const productRouter = require('./productRoute');
const farmRouter = require('./farmRoute');
<<<<<<< HEAD
const cusRoute = require("./cusRoute")
const cartRoute = require("./cartRoute")
=======
const farmerRouter = require('./farmerRoute');
>>>>>>> 3104ef51e96f6fbff456c7f3dfce33c48254086b

function routes(app){
    app.use('/products', productRouter);
    app.use('/farms', farmRouter);
<<<<<<< HEAD
    app.use('/customer',cusRoute);
    app.use('/cart',cartRoute);
=======
    app.use('/farmer', farmerRouter);
>>>>>>> 3104ef51e96f6fbff456c7f3dfce33c48254086b
}

module.exports = routes;