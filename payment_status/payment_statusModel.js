var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var payment_statusSchema = new Schema({
	'name' : { type: String, required: true, unique: true }
});

module.exports = mongoose.model('payment_status', payment_statusSchema);
