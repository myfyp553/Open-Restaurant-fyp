var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = new Schema({
    phonenumber: {
        type:Number,
        required: true
    },

    email: {
        type:String,
        required: true
    },

    orders: [
        {
            order: {
                type: mongoose.Types.ObjectId,
                ref: 'Order'
            } 
        }
    ],

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
   

module.exports = mongoose.model('Customer', customerSchema)