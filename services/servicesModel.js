var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var servicesSchema = new Schema({
	'name': { type: String, required: true, unique: true, lowercase: true },
	'os': { type: Boolean, required: true },
	'path': { type: String, required: true }
});

module.exports = mongoose.model('services', servicesSchema);
