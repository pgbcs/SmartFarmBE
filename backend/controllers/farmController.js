const farmService = require('../services/farmService');

exports.getFarms = async function (req, res){
    try{
        let page = req.query.page;
        let perPage = req.query.perPage;
        if(!page) page = 1;
        if(!perPage) perPage = 10;
        const limit = perPage;
        const offset = (page - 1) *perPage;
        const farm = await farmService.getFarms(limit, offset);

        res.status(200).json({
            data: farm.rows, // Dữ liệu bản ghi
            totalItems: farm.count, // Tổng số bản ghi
            totalPages: Math.ceil(farm.count / perPage), // Tổng số trang
            currentPage: page, // Trang hiện tại
        });
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.getFarmById = async function (req, res){
    try{
        const id = req.query.id;
        const farm = await farmService.getFarmById(id);
        res.status(200).json(farm);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.searchFarm = async function (req, res){
    try{
        const keyword = req.query.keyword;
        let page = req.query.page;
        let perPage = req.query.perPage;
        if(!page) page = 1;
        if(!perPage) perPage = 10;
        const limit = perPage;
        const offset = (page - 1) *perPage;
        const farm = await farmService.searchFarm(keyword, limit, offset);

        res.status(200).json({
            data: farm, // Dữ liệu bản ghi
            totalItems: farm.length, // Tổng số bản ghi
            totalPages: Math.ceil(farm.length / perPage), // Tổng số trang
            currentPage: page, // Trang hiện tại
        });
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.addFarm = async function (req, res){
    try{
        const farm = req.body;
        const result = await farmService.addFarm(farm);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.updateFarm = async function (req, res){
    try{
        const farm = req.body;
        const result = await farmService.updateFarm(farm);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.deleteFarm = async function (req, res){
    try{
        const id = req.query.id;
        const result = await farmService.deleteFarm(id);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}