var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var payment_typeSchema = new Schema({
	'name' : { type: String, required: true, unique: true }
});

module.exports = mongoose.model('payment_type', payment_typeSchema);
