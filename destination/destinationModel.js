var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
	'CID': {
		type: Schema.Types.ObjectId,
		ref: 'city'
	},
	'name': { type: String, required: true, unique: true, lowercase: true }
});

module.exports = mongoose.model('destination', destinationSchema);
