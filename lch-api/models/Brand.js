const mongoose = require('mongoose');
const { Part } = require('./Part');


// schema

const brandSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    website: {
        type: String,
    },
    
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});

// When delete brand it will delete all parts wit ID check.

brandSchema.pre('remove', function() {
    const brand = this;
    return Part.remove({brandId: brand._id});
});

brandSchema.virtual('contactSeller').get(function() {
    const brand = this;
    return `${brand.firstName} ${brand.lastName}`;
})

const Brand = mongoose.model('Brand', brandSchema);


// model
module.exports = {
    Brand, brandSchema,

};