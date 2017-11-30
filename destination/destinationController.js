var destinationModel = require('./destinationModel.js');

/**
 * destinationController.js
 *
 * @description :: Server-side logic for managing destinations.
 */
module.exports = {

    /**
     * destinationController.list()
     */
    list: function (req, res) {
        destinationModel.find(function (err, destinations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting destination.',
                    error: err
                });
            }
            return res.json(destinations);
        });
    },

    /**
     * destinationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        destinationModel.findOne({ _id: id }, function (err, destination) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting destination.',
                    error: err
                });
            }
            if (!destination) {
                return res.status(404).json({
                    message: 'No such destination'
                });
            }
            return res.json(destination);
        });
    },

    /**
     * destinationController.create()
     */
    create: function (req, res) {
        var destination = new destinationModel({
            CID: req.body.CID,
            name: req.body.name

        });

        destination.save(function (err, destination) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating destination',
                    error: err
                });
            }
            return res.status(201).json(destination);
        });
    },

    /**
     * destinationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        destinationModel.findOne({ _id: id }, function (err, destination) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting destination',
                    error: err
                });
            }
            if (!destination) {
                return res.status(404).json({
                    message: 'No such destination'
                });
            }

            destination.CID = req.body.CID ? req.body.CID : destination.CID;
            destination.name = req.body.name ? req.body.name : destination.name;

            destination.save(function (err, destination) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating destination.',
                        error: err
                    });
                }

                return res.json(destination);
            });
        });
    },

    /**
     * destinationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        destinationModel.findByIdAndRemove(id, function (err, destination) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the destination.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    /**
     * destinationController.destination_by_CID()
     */
    destination_by_CID: function (req, res) {
        var id = req.params.id;
        destinationModel.findOne({ _id: id }, function (err, destination) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting destination.',
                    error: err
                });
            }
            if (!destination) {
                return res.status(404).json({
                    message: 'No such destination'
                });
            }
            return res.json(destination);
        });
    },
};
