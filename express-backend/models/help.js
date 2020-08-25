var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var helpSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    compalin_details: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Help', helpSchema)