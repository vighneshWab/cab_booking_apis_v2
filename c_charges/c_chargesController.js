var c_chargesModel = require('./c_chargesModel.js');
var cityModel = require('../city/cityModel');

/**
 * c_chargesController.js
 *
 * @description :: Server-side logic for managing c_chargess.
 */
module.exports = {

    /**
     * c_chargesController.list()
     */
    list: function (req, res) {
        c_chargesModel.find(function (err, c_chargess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting c_charges.',
                    error: err
                });
            }
            return res.json(c_chargess);
        });
    },

    /**
     * c_chargesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        c_chargesModel.findOne({ _id: id }, function (err, c_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting c_charges.',
                    error: err
                });
            }
            if (!c_charges) {
                return res.status(404).json({
                    message: 'No such c_charges'
                });
            }
            return res.json(c_charges);
        });
    },

    /**
     * c_chargesController.create()
     */
    create: function (req, res) {
        var c_charges = new c_chargesModel({
            CID: req.body.CID,
            charges: req.body.charges

        });

        c_charges.save(function (err, c_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating c_charges',
                    error: err
                });
            }
            return res.status(201).json(c_charges);
        });
    },

    /**
     * c_chargesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        c_chargesModel.findOne({ _id: id }, function (err, c_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting c_charges',
                    error: err
                });
            }
            if (!c_charges) {
                return res.status(404).json({
                    message: 'No such c_charges'
                });
            }

            c_charges.CID = req.body.CID ? req.body.CID : c_charges.CID;
            c_charges.charges = req.body.charges ? req.body.charges : c_charges.charges;


            c_charges.save(function (err, c_charges) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating c_charges.',
                        error: err
                    });
                }

                return res.json(c_charges);
            });
        });
    },

    /**
     * c_chargesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        c_chargesModel.findByIdAndRemove(id, function (err, c_charges) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the c_charges.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },

    /**
     * c_chargesController.c_charges_by_CID()
     */
    c_charges_by_CID: function (req, res) {
        var id = req.params.id;
        c_chargesModel
            .findOne({ CID: id })
            .populate('charges.SID')
            .exec(function (err, data) {
                if (err) {
                    return res.status(500).json({
                        message: 'error while getting service names using population...',
                        error: err
                    });
                }
                return res.status(201).json({
                    message: 'using population...',
                    data: data
                });
            });

    },

    /**
     * c_chargesController.c_charges_by_city_name()
     */
    c_charges_by_city_name: function (req, res) {
        var name = req.params.id;
        cityModel.findOne({ name: name }, function (err, city) {
            if (err) {
                return res.status(500).json({
                    message: 'error while finding city_name',
                    error: err
                });

            }
            if (city) {
                c_chargesModel
                    .findOne({ CID: city._id })
                    .populate('charges.SID')
                    .exec(function (err, data) {
                        if (err) {
                            return res.status(500).json({
                                message: 'error while getting service names using population...',
                                error: err
                            });
                        }
                        return res.status(201).json({
                            message: 'using population...',
                            data: data
                        });
                    });

            }

        })
    },
};
