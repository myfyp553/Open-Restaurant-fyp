var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    ratings: [
        {
            rating: {
                type: mongoose.Types.ObjectId,
                ref: 'Rating'
            }
        }
    ],
    reviews: [
        {
            review: {
                type: mongoose.Types.ObjectId,
                ref: 'Review'
            }
        }
    ],

});

module.exports = mongoose.model('Item', itemSchema)