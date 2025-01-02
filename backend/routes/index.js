const productRouter = require('./productRoute');
const farmRouter = require('./farmRoute');
const farmerRouter = require('./farmerRoute');

function routes(app){
    app.use('/products', productRouter);
    app.use('/farms', farmRouter);
    app.use('/farmer', farmerRouter);
}
module.exports = routes;