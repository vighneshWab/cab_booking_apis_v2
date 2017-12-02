var c_orderModel = require('./c_orderModel.js');

/**
 * c_orderController.js
 *
 * @description :: Server-side logic for managing c_orders.
 */
module.exports = {

    /**
     * c_orderController.list()
     */
    list: function (req, res) {
        c_orderModel.find(function (err, c_orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting c_order.',
                    error: err
                });
            }
            return res.json(c_orders);
        });
    },

    /**
     * c_orderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        c_orderModel.findOne({_id: id}, function (err, c_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting c_order.',
                    error: err
                });
            }
            if (!c_order) {
                return res.status(404).json({
                    message: 'No such c_order'
                });
            }
            return res.json(c_order);
        });
    },

    /**
     * c_orderController.create()
     */
    create: function (req, res) {
        var c_order = new c_orderModel({
			CUSID : req.body.CUSID,
			C_CSID : req.body.C_CSID,
			DERID : req.body.DERID,
			pp : req.body.pp,
			dp : req.body.dp,
			otp : req.body.otp,
			order_status : req.body.order_status,
			payment_status : req.body.payment_status,
			payment_type : req.body.payment_type

        });

        c_order.save(function (err, c_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating c_order',
                    error: err
                });
            }
            return res.status(201).json(c_order);
        });
    },

    /**
     * c_orderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        c_orderModel.findOne({_id: id}, function (err, c_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting c_order',
                    error: err
                });
            }
            if (!c_order) {
                return res.status(404).json({
                    message: 'No such c_order'
                });
            }

            c_order.CUSID = req.body.CUSID ? req.body.CUSID : c_order.CUSID;
			c_order.C_CSID = req.body.C_CSID ? req.body.C_CSID : c_order.C_CSID;
			c_order.DERID = req.body.DERID ? req.body.DERID : c_order.DERID;
			c_order.pp = req.body.pp ? req.body.pp : c_order.pp;
			c_order.dp = req.body.dp ? req.body.dp : c_order.dp;
			c_order.otp = req.body.otp ? req.body.otp : c_order.otp;
			c_order.order_status = req.body.order_status ? req.body.order_status : c_order.order_status;
			c_order.payment_status = req.body.payment_status ? req.body.payment_status : c_order.payment_status;
			c_order.payment_type = req.body.payment_type ? req.body.payment_type : c_order.payment_type;
			
            c_order.save(function (err, c_order) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating c_order.',
                        error: err
                    });
                }

                return res.json(c_order);
            });
        });
    },

    /**
     * c_orderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        c_orderModel.findByIdAndRemove(id, function (err, c_order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the c_order.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
