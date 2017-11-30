var servicesModel = require('./servicesModel.js');

/**
 * servicesController.js
 *
 * @description :: Server-side logic for managing servicess.
 */
module.exports = {

    /**
     * servicesController.list()
     */
    list: function (req, res) {
        servicesModel.find(function (err, servicess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting services.',
                    error: err
                });
            }
            return res.json(servicess);
        });
    },

    /**
     * servicesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        servicesModel.findOne({_id: id}, function (err, services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting services.',
                    error: err
                });
            }
            if (!services) {
                return res.status(404).json({
                    message: 'No such services'
                });
            }
            return res.json(services);
        });
    },

    /**
     * servicesController.create()
     */
    create: function (req, res) {
        var services = new servicesModel({
			name : req.body.name,
			os : req.body.os,
			path : req.body.path

        });

        services.save(function (err, services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating services',
                    error: err
                });
            }
            return res.status(201).json(services);
        });
    },

    /**
     * servicesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        servicesModel.findOne({_id: id}, function (err, services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting services',
                    error: err
                });
            }
            if (!services) {
                return res.status(404).json({
                    message: 'No such services'
                });
            }

            services.name = req.body.name ? req.body.name : services.name;
			services.os = req.body.os ? req.body.os : services.os;
			services.path = req.body.path ? req.body.path : services.path;
			
            services.save(function (err, services) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating services.',
                        error: err
                    });
                }

                return res.json(services);
            });
        });
    },

    /**
     * servicesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        servicesModel.findByIdAndRemove(id, function (err, services) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the services.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
