var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var super_adminSchema = new Schema({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Super_admin', super_adminSchema)