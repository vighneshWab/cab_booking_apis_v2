var express = require('express');
var router = express.Router();
var o_orderController = require('./o_orderController.js');

/*
 * GET
 */
router.get('/', o_orderController.list);

/*
 * GET
 */
router.get('/:id', o_orderController.show);

/*
 * POST
 */
router.post('/', o_orderController.create);

/*
 * PUT
 */
router.put('/:id', o_orderController.update);

/*
 * DELETE
 */
router.delete('/:id', o_orderController.remove);

module.exports = router;
