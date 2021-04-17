const  NotFoundError  = require('../errors/NotFoundError');
const { Brand } = require('../models/Brand');
const  ValidationError  = require('../errors/ValidationError');


class BrandController {

    // CREATE BRAND 

    createBrand = async (req, res, next) => {
        
        try {
            const brand = new Brand(req.body);
            const b = await brand.save();
            res.status(200).json(b);

        }
        catch (e) {
            next(e.errors ? new ValidationError(e): e);
            
        }
        
    }

    // GETTING BRANDS

    getBrands = async (req, res, next) => {
        try {
            const brands = await Brand.find().exec();
            res.status(200).json(brands);
        } catch (e) {
            next(e);
        }

    }

    // GETTING BRAND WITH ID (detail)
    
    getBrandById = async (req,res,next) => {
        try{
            const { id } = req.params;
            const brand = await Brand.findById(id).exec();
            if(brand) {
                res.status(200).json(brand);
            } 
            else {
                next(new NotFoundError());
            }
        } catch(e) {
            next(e);
        }
    }

    // UPDATE BRAND WITH ID

    updateBrandById = async (req,res,next) => {
        try{
            const { id } = req.params;
            const brand = await Brand.findById(id).exec();
            if(brand) {
                brand.overwrite(req.body);
                const result = await brand.save();
                res.status(200).json(result);
            } 
            else {
                next(new NotFoundError());
            }
        } catch(e) {
            next(e.errors ? new ValidationError(e): e);
        }
    }

    // DELETING BRAND WITH ID

    deleteBrandById = async (req,res,next) => {
        
        try {
            const { id } = req.params;
            const brand = await Brand.findById(id).exec();
            if (brand) {
                await brand.remove();
                res.status(200).json({});
            }
            else {
                next(new NotFoundError());
            }
        }
        catch(e) {
            next(e);
        }
    }

    

}

module.exports = BrandController;