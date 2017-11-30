var os_chargesModel = require('./os_chargesModel.js');

/**
 * os_chargesController.js
 *
 * @description :: Server-side logic for managing os_chargess.
 */
module.exports = {

    /**
     * os_chargesController.list()
     */
    list: function (req, res) {
        os_chargesModel.find(function (err, os_chargess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting os_charges.',
                    error: err
                });
            }
            return res.json(os_chargess);
        });
    },

    /**
     * os_chargesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        os_chargesModel.findOne({ _id: id }, function (err, os_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting os_charges.',
                    error: err
                });
            }
            if (!os_charges) {
                return res.status(404).json({
                    message: 'No such os_charges'
                });
            }
            return res.json(os_charges);
        });
    },

    /**
     * os_chargesController.create()
     */
    create: function (req, res) {
        var os_charges = new os_chargesModel({
            DID: req.body.DID,
            charges: req.body.charges

        });

        os_charges.save(function (err, os_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating os_charges',
                    error: err
                });
            }
            return res.status(201).json(os_charges);
        });
    },

    /**
     * os_chargesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        os_chargesModel.findOne({ _id: id }, function (err, os_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting os_charges',
                    error: err
                });
            }
            if (!os_charges) {
                return res.status(404).json({
                    message: 'No such os_charges'
                });
            }

            os_charges.DID = req.body.DID ? req.body.DID : os_charges.DID;
            os_charges.charges = req.body.charges ? req.body.charges : os_charges.charges;

            os_charges.save(function (err, os_charges) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating os_charges.',
                        error: err
                    });
                }

                return res.json(os_charges);
            });
        });
    },

    /**
     * os_chargesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        os_chargesModel.findByIdAndRemove(id, function (err, os_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the os_charges.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },

    os_charges_by_DID: function (req, res) {
        var id = req.params.id;
        os_chargesModel
            .findOne({ DID: id })
            .populate('charges.SID')
            .exec(function (err, data) {
                if (err) {
                    return res.status(500).json({
                        message: 'error while getting service names using population...',
                        error: err
                    });
                }
                return res.status(201).json({
                    message: 'F...',
                    data: data
                });
            });
    },
};
