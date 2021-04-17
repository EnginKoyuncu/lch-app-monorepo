const  NotFoundError  = require('../errors/NotFoundError');
const { Part } = require('../models/Part');
const  ValidationError  = require('../errors/ValidationError');


class PartController {

    // CREATE PART 

    createPart = async (req, res, next) => {
        
        try {
            const part = new Part(req.body);
            const b = await part.save();
            res.status(200).json(b);

        }
        catch (e) {
            next(e.errors ? new ValidationError(e): e);
            
        }
        
    }

    // GETTING PARTS

    getParts = async (req, res, next) => {
        try {
            const parts = await Part.find().populate('brand',['brand']).lean().exec();
            res.status(200).json(parts);
        } catch (e) {
            next(e);
        }

    }

    // GETTING PART WITH ID (detail)
    
    getPartById = async (req,res,next) => {
        try{
            const { id } = req.params;
            const part = await Part.findById(id).populate('brand').lean().exec();
            if(part) {
                res.status(200).json(part);
            } 
            else {
                next(new NotFoundError());
            }
        } catch(e) {
            next(e);
        }
    }

    // UPDATE PART WITH ID

    updatePartById = async (req,res,next) => {
        try{
            const { id } = req.params;
            const part = await Part.findById(id).exec();
            if(part) {
                part.overwrite(req.body);
                const result = await part.save();
                res.status(200).json(result);
            } 
            else {
                next(new NotFoundError());
            }
        } catch(e) {
            next(e.errors ? new ValidationError(e): e);
        }
    }

    // DELETING PART WITH ID

    deletePartById = async (req,res,next) => {
        
        try {
            const { id } = req.params;
            const part = await Part.findById(id).exec();
            if (part) {
                await part.remove();
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

module.exports = PartController;