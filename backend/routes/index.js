const productRouter = require('./productRoute');
const farmRouter = require('./farmRoute');


function routes(app){
    app.use('/products', productRouter);
    app.use('/farms', farmRouter);
}
module.exports = routes;