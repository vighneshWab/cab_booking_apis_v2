var express = require('express');
var router = express.Router();
var payment_statusController = require('./payment_statusController.js');

/*
 * GET
 */
router.get('/', payment_statusController.list);

/*
 * GET
 */
router.get('/:id', payment_statusController.show);

/*
 * POST
 */
router.post('/', payment_statusController.create);

/*
 * PUT
 */
router.put('/:id', payment_statusController.update);

/*
 * DELETE
 */
router.delete('/:id', payment_statusController.remove);

module.exports = router;
