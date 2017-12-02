var o_orderModel = require('./o_orderModel.js');

/**
 * o_orderController.js
 *
 * @description :: Server-side logic for managing o_orders.
 */
module.exports = {

    /**
     * o_orderController.list()
     */
    list: function (req, res) {
        o_orderModel.find(function (err, o_orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting o_order.',
                    error: err
                });
            }
            return res.json(o_orders);
        });
    },

    /**
     * o_orderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        o_orderModel.findOne({_id: id}, function (err, o_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting o_order.',
                    error: err
                });
            }
            if (!o_order) {
                return res.status(404).json({
                    message: 'No such o_order'
                });
            }
            return res.json(o_order);
        });
    },

    /**
     * o_orderController.create()
     */
    create: function (req, res) {
        var o_order = new o_orderModel({
			CUSID : req.body.CUSID,
			O_CSID : req.body.O_CSID,
			DERID : req.body.DERID,
			pp : req.body.pp,
			dp : req.body.dp,
			otp : req.body.otp,
			order_status : req.body.order_status,
			payment_status : req.body.payment_status,
			payment_type : req.body.payment_type

        });

        o_order.save(function (err, o_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating o_order',
                    error: err
                });
            }
            return res.status(201).json(o_order);
        });
    },

    /**
     * o_orderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        o_orderModel.findOne({_id: id}, function (err, o_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting o_order',
                    error: err
                });
            }
            if (!o_order) {
                return res.status(404).json({
                    message: 'No such o_order'
                });
            }

            o_order.CUSID = req.body.CUSID ? req.body.CUSID : o_order.CUSID;
			o_order.O_CSID = req.body.O_CSID ? req.body.O_CSID : o_order.O_CSID;
			o_order.DERID = req.body.DERID ? req.body.DERID : o_order.DERID;
			o_order.pp = req.body.pp ? req.body.pp : o_order.pp;
			o_order.dp = req.body.dp ? req.body.dp : o_order.dp;
			o_order.otp = req.body.otp ? req.body.otp : o_order.otp;
			o_order.order_status = req.body.order_status ? req.body.order_status : o_order.order_status;
			o_order.payment_status = req.body.payment_status ? req.body.payment_status : o_order.payment_status;
			o_order.payment_type = req.body.payment_type ? req.body.payment_type : o_order.payment_type;
			
            o_order.save(function (err, o_order) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating o_order.',
                        error: err
                    });
                }

                return res.json(o_order);
            });
        });
    },

    /**
     * o_orderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        o_orderModel.findByIdAndRemove(id, function (err, o_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the o_order.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
