var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var staffSchema = new Schema({
  
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        
    },

    password:{
        type:String,

    },
  /*   email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    password: {
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
    ], */ 
});

module.exports = mongoose.model('Staff', staffSchema)