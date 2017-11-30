var mongoose = require('mongoose');
const arrayUniquePlugin = require('mongoose-unique-array');

var Schema = mongoose.Schema;

var city_servicesSchema = new Schema({
	'CID': {
		type: Schema.Types.ObjectId,
		ref: 'city',
		required: true,
	},
	'services': [{
		'SID': {
			type: Schema.Types.ObjectId,
			ref: 'services',
			required: true,
			unique: true
		}
	}]
});

city_servicesSchema.path('services').validate(function (features) {
	if (features.length === 0) { return false }
	return true;
}, 'minimum one serive has to be provide');



module.exports = mongoose.model('city_services', city_servicesSchema);
