var express = require('express');
var router = express.Router();
var c_orderController = require('./c_orderController.js');

/*
 * GET
 */
router.get('/', c_orderController.list);

/*
 * GET
 */
router.get('/:id', c_orderController.show);

/*
 * POST
 */
router.post('/', c_orderController.create);

/*
 * PUT
 */
router.put('/:id', c_orderController.update);

/*
 * DELETE
 */
router.delete('/:id', c_orderController.remove);

module.exports = router;
