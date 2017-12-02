var payment_typeModel = require('./payment_typeModel.js');

/**
 * payment_typeController.js
 *
 * @description :: Server-side logic for managing payment_types.
 */
module.exports = {

    /**
     * payment_typeController.list()
     */
    list: function (req, res) {
        payment_typeModel.find(function (err, payment_types) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting payment_type.',
                    error: err
                });
            }
            return res.json(payment_types);
        });
    },

    /**
     * payment_typeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        payment_typeModel.findOne({_id: id}, function (err, payment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting payment_type.',
                    error: err
                });
            }
            if (!payment_type) {
                return res.status(404).json({
                    message: 'No such payment_type'
                });
            }
            return res.json(payment_type);
        });
    },

    /**
     * payment_typeController.create()
     */
    create: function (req, res) {
        var payment_type = new payment_typeModel({
			name : req.body.name

        });

        payment_type.save(function (err, payment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating payment_type',
                    error: err
                });
            }
            return res.status(201).json(payment_type);
        });
    },

    /**
     * payment_typeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        payment_typeModel.findOne({_id: id}, function (err, payment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting payment_type',
                    error: err
                });
            }
            if (!payment_type) {
                return res.status(404).json({
                    message: 'No such payment_type'
                });
            }

            payment_type.name = req.body.name ? req.body.name : payment_type.name;
			
            payment_type.save(function (err, payment_type) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating payment_type.',
                        error: err
                    });
                }

                return res.json(payment_type);
            });
        });
    },

    /**
     * payment_typeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        payment_typeModel.findByIdAndRemove(id, function (err, payment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the payment_type.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
