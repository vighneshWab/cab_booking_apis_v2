var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
	'name': { type: String, required: true, unique: true, lowercase: true }
});

module.exports = mongoose.model('city', citySchema);
