var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var waiterSchema = new Schema({
  
    username: {
        type: String,
        required: true
    },
    restaurant: {
        
    
        type:mongoose.Types.ObjectId,
        ref: 'Restaurant'
    
   },
    email: {
        type: String,
        
    },

    password:{
        type:String,

    },
     /*phonenumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    picture: {
        type: Buffer,
        required: true
    },
    orders: [
        {
            order: {
                type: mongoose.Types.ObjectId,
                ref: 'Order'
            } 
        }
    ],  */

});

module.exports = mongoose.model('Waiter', waiterSchema)