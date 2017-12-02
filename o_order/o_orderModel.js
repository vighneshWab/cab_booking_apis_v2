var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var o_orderSchema = new Schema({
	'CUSID' : {
	 	type: Schema.Types.ObjectId,
		 ref: 'customer',
		 required:true
	},
	'O_CSID' : {
	 	type: Schema.Types.ObjectId,
		 ref: 'os_charges',
		 required:true
	},
	'DERID' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'driver'
	},
	'pp' :  { type: String, required: true },
	'dp' :  { type: String, required: true },
	'otp' :  { type: String, required: true ,default:"1234"},
	'order_status': {
		type: Schema.Types.ObjectId,
		ref: 'order_status',
		required: true,
		default: "5a21555820429c0df01d7aca"
	},
	'payment_status': {
		type: Schema.Types.ObjectId,
		ref: 'payment_status',
		required: true,
		default: "5a2155e020429c0df01d7ad0"
	},
	'payment_type': {
		type: Schema.Types.ObjectId,
		ref: 'payment_type',
		required: true,
		default: "5a21560c20429c0df01d7ad2"
	},
	'updatedAt': { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('o_order', o_orderSchema);
