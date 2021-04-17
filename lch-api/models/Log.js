const mongoose = require('mongoose');


// schema

const logSchema = new mongoose.Schema({
    review: {
        type: 'String',
        required: true,
    },
    partId: {
        type: 'ObjectId',
        required: true,
    },
    userId: {
        type: 'ObjectId',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }

});


logSchema.virtual('part', {
    ref: 'Part',
    localField: 'partId',
    foreignField: '_id',
    justOne: true,
}); 

logSchema.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true,
}); 


const Log = mongoose.model('Log', logSchema);


// model
module.exports = {
    Log, logSchema,

};