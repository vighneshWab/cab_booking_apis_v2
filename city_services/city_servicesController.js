var city_servicesModel = require('./city_servicesModel.js');

var cityModel = require('../city/cityModel');

/**
 * city_servicesController.js
 *
 * @description :: Server-side logic for managing city_servicess.
 */
module.exports = {

    /**
     * city_servicesController.list()
     */
    list: function (req, res) {
        city_servicesModel.find(function (err, city_servicess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting city_services.',
                    error: err
                });
            }
            return res.json(city_servicess);
        });
    },

    /**
     * city_servicesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        city_servicesModel.findOne({ _id: id }, function (err, city_services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting city_services.',
                    error: err
                });
            }
            if (!city_services) {
                return res.status(404).json({
                    message: 'No such city_services'
                });
            }
            return res.json(city_services);
        });
    },

    /**
     * city_servicesController.create()
     */
    create: function (req, res) {
        var city_services = new city_servicesModel({
            CID: req.body.CID,
            services: req.body.services

        });

        city_services.save(function (err, city_services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating city_services',
                    error: err
                });
            }
            return res.status(201).json(city_services);
        });
    },

    /**
     * city_servicesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        city_servicesModel.findOne({ _id: id }, function (err, city_services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting city_services',
                    error: err
                });
            }
            if (!city_services) {
                return res.status(404).json({
                    message: 'No such city_services'
                });
            }

            city_services.CID = req.body.CID ? req.body.CID : city_services.CID;
            city_services.services = req.body.services ? req.body.services : city_services.services;

            city_services.save(function (err, city_services) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating city_services.',
                        error: err
                    });
                }

                return res.json(city_services);
            });
        });
    },

    /**
     * city_servicesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        city_servicesModel.findByIdAndRemove(id, function (err, city_services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the city_services.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },


    /**
     * city_servicesController.services_by_city_name()
     */
    services_by_city_name: function (req, res) {
        var name = req.params.id;
        cityModel.findOne({ name: name }, function (err, city) {
            if (err) {
                return res.status(500).json({
                    message: 'error while finding city_name',
                    error: err
                });

            }
            if (city) {
                city_servicesModel
                    .findOne({ CID: city._id })
                    .populate('services.SID')
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

    /**
     * city_servicesController.services_by_CID()
     */
    services_by_CID: function (req, res) {
        var id = req.params.id;
        city_servicesModel
            .findOne({ CID: id })
            .populate('services.SID')
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
};
