var express = require('express');
var router = express.Router();
var payment_typeController = require('./payment_typeController.js');

/*
 * GET
 */
router.get('/', payment_typeController.list);

/*
 * GET
 */
router.get('/:id', payment_typeController.show);

/*
 * POST
 */
router.post('/', payment_typeController.create);

/*
 * PUT
 */
router.put('/:id', payment_typeController.update);

/*
 * DELETE
 */
router.delete('/:id', payment_typeController.remove);

module.exports = router;
