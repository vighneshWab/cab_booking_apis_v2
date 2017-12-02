var driverModel = require('./driverModel.js');

/**
 * driverController.js
 *
 * @description :: Server-side logic for managing drivers.
 */
module.exports = {

    /**
     * driverController.list()
     */
    list: function (req, res) {
        driverModel.find(function (err, drivers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting driver.',
                    error: err
                });
            }
            return res.json(drivers);
        });
    },

    /**
     * driverController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        driverModel.findOne({_id: id}, function (err, driver) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting driver.',
                    error: err
                });
            }
            if (!driver) {
                return res.status(404).json({
                    message: 'No such driver'
                });
            }
            return res.json(driver);
        });
    },

    /**
     * driverController.create()
     */
    create: function (req, res) {
        var driver = new driverModel({
			name : req.body.name,
			email : req.body.email,
			contact : req.body.contact,
			password : req.body.password,
			wn : req.body.wn,
			ln : req.body.ln,
			ip : req.body.ip,
			wt : req.body.wt,
			os : req.body.os

        });

        driver.save(function (err, driver) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating driver',
                    error: err
                });
            }
            return res.status(201).json(driver);
        });
    },

    /**
     * driverController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        driverModel.findOne({_id: id}, function (err, driver) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting driver',
                    error: err
                });
            }
            if (!driver) {
                return res.status(404).json({
                    message: 'No such driver'
                });
            }

            driver.name = req.body.name ? req.body.name : driver.name;
			driver.email = req.body.email ? req.body.email : driver.email;
			driver.contact = req.body.contact ? req.body.contact : driver.contact;
			driver.password = req.body.password ? req.body.password : driver.password;
			driver.wn = req.body.wn ? req.body.wn : driver.wn;
			driver.ln = req.body.ln ? req.body.ln : driver.ln;
			driver.ip = req.body.ip ? req.body.ip : driver.ip;
			driver.wt = req.body.wt ? req.body.wt : driver.wt;
			driver.os = req.body.os ? req.body.os : driver.os;
			
            driver.save(function (err, driver) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating driver.',
                        error: err
                    });
                }

                return res.json(driver);
            });
        });
    },

    /**
     * driverController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        driverModel.findByIdAndRemove(id, function (err, driver) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the driver.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
