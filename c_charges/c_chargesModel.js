var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var c_chargesSchema = new Schema({
	'CID': {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'city'
	},
	'charges': [{
		'SID': {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'services'
		},
		'bk': { type: Number, required: true },
		'bf': { type: Number, required: true },
		'till_km': { type: Number, required: true },
		'till_f': { type: Number, required: true },
		'f_till': { type: Number, required: true }
	}]
});

module.exports = mongoose.model('c_charges', c_chargesSchema);
