var express = require('express');
var router = express.Router();
var servicesController = require('./servicesController.js');

/*
 * GET
 */
router.get('/', servicesController.list);

/*
 * GET
 */
router.get('/:id', servicesController.show);

/*
 * POST
 */
router.post('/', servicesController.create);

/*
 * PUT
 */
router.put('/:id', servicesController.update);

/*
 * DELETE
 */
router.delete('/:id', servicesController.remove);

module.exports = router;
