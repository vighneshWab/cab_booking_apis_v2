var payment_statusModel = require('./payment_statusModel.js');

/**
 * payment_statusController.js
 *
 * @description :: Server-side logic for managing payment_statuss.
 */
module.exports = {

    /**
     * payment_statusController.list()
     */
    list: function (req, res) {
        payment_statusModel.find(function (err, payment_statuss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting payment_status.',
                    error: err
                });
            }
            return res.json(payment_statuss);
        });
    },

    /**
     * payment_statusController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        payment_statusModel.findOne({_id: id}, function (err, payment_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting payment_status.',
                    error: err
                });
            }
            if (!payment_status) {
                return res.status(404).json({
                    message: 'No such payment_status'
                });
            }
            return res.json(payment_status);
        });
    },

    /**
     * payment_statusController.create()
     */
    create: function (req, res) {
        var payment_status = new payment_statusModel({
			name : req.body.name

        });

        payment_status.save(function (err, payment_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating payment_status',
                    error: err
                });
            }
            return res.status(201).json(payment_status);
        });
    },

    /**
     * payment_statusController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        payment_statusModel.findOne({_id: id}, function (err, payment_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting payment_status',
                    error: err
                });
            }
            if (!payment_status) {
                return res.status(404).json({
                    message: 'No such payment_status'
                });
            }

            payment_status.name = req.body.name ? req.body.name : payment_status.name;
			
            payment_status.save(function (err, payment_status) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating payment_status.',
                        error: err
                    });
                }

                return res.json(payment_status);
            });
        });
    },

    /**
     * payment_statusController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        payment_statusModel.findByIdAndRemove(id, function (err, payment_status) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the payment_status.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
