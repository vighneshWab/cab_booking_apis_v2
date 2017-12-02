var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driverSchema = new Schema({
	'name': { type: String, required: true },
	'email': { type: String, required: true, unique: true },
	'contact': { type: String, required: true, unique: true },
	'password': { type: String, required: true },
	'wn': { type: String, required: true }, // vehical number
	'ln': { type: String, required: true }, // license number
	'ip': { type: String, required: true }, // image path url
	'wt': { // vehical type [bike,auto,mini,micro,prime]
		type: Schema.Types.ObjectId,
		ref: 'services'
	},
	'os': { type: Boolean, required: true, default: false } // can be available for outstation
});

module.exports = mongoose.model('driver', driverSchema);
