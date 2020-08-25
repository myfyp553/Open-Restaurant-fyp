var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
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
    menu: {
        type: mongoose.Types.ObjectId,
        ref: 'Menu'
     }, 
    restaurant_admin:{
        type: mongoose.Types.ObjectId,
        ref: 'Restaurant_admin'
    },
    
    restaurant_waiter:{
            type:[{
                wid:{
                    type:mongoose.Types.ObjectId,
                    ref:'Waiter'
                }
            }]
        },
    restaurant_staff:{
            type:[{
                sid:{
                    type:mongoose.Types.ObjectId,
                    ref:'Staff'
                }
            }]
        }
          

       
    

});

module.exports = mongoose.model('Restaurant', restaurantSchema) 