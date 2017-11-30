var express = require('express');
var router = express.Router();
var destinationController = require('./destinationController.js');

/*
 * GET
 */
router.get('/', destinationController.list);

/*
 * GET
 */
router.get('/:id', destinationController.show);

/*
 * POST
 */
router.post('/', destinationController.create);

/*
 * PUT
 */
router.put('/:id', destinationController.update);

/*
 * DELETE
 */
router.delete('/:id', destinationController.remove);

/*
 * GET destination_by_CID
 */
router.get('/destination_by_CID/:id', destinationController.destination_by_CID);

module.exports = router;
