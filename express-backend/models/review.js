var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reviewSchema = new Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    thumbsup: [
        {
            person:{
                type: mongoose.Types.ObjectId,
                ref: 'Customer'
            },
        }
    ],
    thumbsdown:[
        {
            person:{
                type: mongoose.Types.ObjectId,
                ref: 'Customer'
            },
        }
    ],

});

module.exports = mongoose.model('Review', reviewSchema)