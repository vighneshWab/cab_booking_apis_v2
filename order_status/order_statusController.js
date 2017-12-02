var order_statusModel = require('./order_statusModel.js');

/**
 * order_statusController.js
 *
 * @description :: Server-side logic for managing order_statuss.
 */
module.exports = {

    /**
     * order_statusController.list()
     */
    list: function (req, res) {
        order_statusModel.find(function (err, order_statuss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order_status.',
                    error: err
                });
            }
            return res.json(order_statuss);
        });
    },

    /**
     * order_statusController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        order_statusModel.findOne({_id: id}, function (err, order_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order_status.',
                    error: err
                });
            }
            if (!order_status) {
                return res.status(404).json({
                    message: 'No such order_status'
                });
            }
            return res.json(order_status);
        });
    },

    /**
     * order_statusController.create()
     */
    create: function (req, res) {
        var order_status = new order_statusModel({
			name : req.body.name

        });

        order_status.save(function (err, order_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating order_status',
                    error: err
                });
            }
            return res.status(201).json(order_status);
        });
    },

    /**
     * order_statusController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        order_statusModel.findOne({_id: id}, function (err, order_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order_status',
                    error: err
                });
            }
            if (!order_status) {
                return res.status(404).json({
                    message: 'No such order_status'
                });
            }

            order_status.name = req.body.name ? req.body.name : order_status.name;
			
            order_status.save(function (err, order_status) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating order_status.',
                        error: err
                    });
                }

                return res.json(order_status);
            });
        });
    },

    /**
     * order_statusController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        order_statusModel.findByIdAndRemove(id, function (err, order_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the order_status.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
