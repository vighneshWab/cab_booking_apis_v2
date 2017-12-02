var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
	'name': { type: String, required: true },
	'email': { type: String, required: true, unique: true },
	'contact': { type: String, required: true, unique: true },
	'password': { type: String, required: true }
});

module.exports = mongoose.model('customer', customerSchema);
