var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var order_statusSchema = new Schema({
	'name': { type: String, required: true, unique: true }
});

module.exports = mongoose.model('order_status', order_statusSchema);
