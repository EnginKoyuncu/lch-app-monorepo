const mongoose = require('mongoose');


// schema

const partSchema = new mongoose.Schema({
    brandId: {
        type: 'ObjectId',
        required: true,
    },
    serie: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    description_product: {
        type: String,
        required: true,
    },
    
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }

});


partSchema.virtual('brand', {
    ref: 'Brand',
    localField: 'brandId',
    foreignField: '_id',
    justOne: true,
}); 


const Part = mongoose.model('Part', partSchema);


// model
module.exports = {
    Part, partSchema,

};