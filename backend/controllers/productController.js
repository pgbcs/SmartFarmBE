const productService = require('../services/productService');

exports.getProductsNotSold = async function (req, res){
    try{
        let page = req.query.page;
        let perPage = req.query.perPage;
        if(!page) page = 1;
        if(!perPage) perPage = 10;
        const limit = perPage;
        const offset = (page - 1) *perPage;
        const product = await productService.getProductsNotSold(limit, offset);

        res.status(200).json({
            data: product.rows, // Dữ liệu bản ghi
            totalItems: product.count, // Tổng số bản ghi
            totalPages: Math.ceil(product.count / perPage), // Tổng số trang
            currentPage: page, // Trang hiện tại
        });
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.getProductById = async function (req, res){
    try{
        const id = req.query.id;
        const product = await productService.getProductById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.searchProduct = async function (req, res){
    try{
        const keyword = req.query.keyword;
        let page = req.query.page;
        let perPage = req.query.perPage;
        if(!page) page = 1;
        if(!perPage) perPage = 10;
        const limit = perPage;
        const offset = (page - 1) *perPage;
        const product = await productService.searchProduct(keyword, limit, offset);

        res.status(200).json({
            data: product, // Dữ liệu bản ghi
            totalItems: product.length, // Tổng số bản ghi
            totalPages: Math.ceil(product.length / perPage), // Tổng số trang
            currentPage: page, // Trang hiện tại
        });
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.getProductsByGenType = async function (req, res){
    try{
        const type = req.query.type;
        let sortOpt = req.query.sortOpt;
        let page = req.query.page;
        let perPage = req.query.perPage;
        if(!page) page = 1;
        if(!perPage) perPage = 10;
        if(!sortOpt) sortOpt = 'ASC';  
        const limit = perPage;
        const offset = (page - 1) *perPage;
        const product = await productService.getProductsByGenType(type, limit, offset, sortOpt);

        res.status(200).json({
            data: product.rows, // Dữ liệu bản ghi
            totalItems: product.count, // Tổng số bản ghi
            totalPages: Math.ceil(product.count / perPage), // Tổng số trang
            currentPage: page, // Trang hiện tại
        });
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.getProductsByOrderedPrice = async function (req, res){
    try{
        let page = req.query.page;
        let perPage = req.query.perPage;
        let sortOpt = req.query.sortOpt;
        if(!page) page = 1;
        if(!perPage) perPage = 10;
        if(!sortOpt) sortOpt = 'ASC';
        const limit = perPage;
        const offset = (page - 1) *perPage;
        const product = await productService.getProductsByOrderedPrice(limit, offset, sortOpt);

        res.status(200).json({
            data: product.rows, // Dữ liệu bản ghi
            totalItems: product.count, // Tổng số bản ghi
            totalPages: Math.ceil(product.count / perPage), // Tổng số trang
            currentPage: page, // Trang hiện tại
        });
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.addCrop = async function (req, res){
    try{
        const product = req.body;
        const result = await productService.addCrop(product);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.addAqua = async function (req, res){
    try{
        const product = req.body;
        const result = await productService.addAqua(product);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.addPoultry = async function (req, res){
    try{
        const product = req.body;
        const result = await productService.addPoultry(product);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.addLivestock = async function (req, res){
    try{
        const product = req.body;
        const result = await productService.addLivestock(product);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.deleteProduct = async function (req, res){
    try{
        const id = req.query.id;
        const result = await productService.deleteProduct(id);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}