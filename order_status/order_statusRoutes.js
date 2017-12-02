var express = require('express');
var router = express.Router();
var order_statusController = require('./order_statusController.js');

/*
 * GET
 */
router.get('/', order_statusController.list);

/*
 * GET
 */
router.get('/:id', order_statusController.show);

/*
 * POST
 */
router.post('/', order_statusController.create);

/*
 * PUT
 */
router.put('/:id', order_statusController.update);

/*
 * DELETE
 */
router.delete('/:id', order_statusController.remove);

module.exports = router;
