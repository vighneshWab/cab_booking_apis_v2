var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var os_chargesSchema = new Schema({
	'DID': {
		type: Schema.Types.ObjectId,
		ref: 'destination'
	},
	"charges": [{
		'SID': {
			type: Schema.Types.ObjectId,
			ref: 'services',
			required: true
		},
		'bk': { type: Number, required: true },
		'bm': { type: Number, required: true },
		'bf': { type: Number, required: true },
		'cpk': { type: Number, required: true },
		'cpm': { type: Number, required: true }
	}]
});

module.exports = mongoose.model('os_charges', os_chargesSchema);
