var express = require('express');
var router = express.Router();
var c_chargesController = require('./c_chargesController.js');

/*
 * GET
 */
router.get('/', c_chargesController.list);

/*
 * GET
 */
router.get('/:id', c_chargesController.show);

/*
 * POST
 */
router.post('/', c_chargesController.create);

/*
 * PUT
 */
router.put('/:id', c_chargesController.update);

/*
 * DELETE
 */
router.delete('/:id', c_chargesController.remove);

router.get('/c_charges_by_city_name/:id', c_chargesController.c_charges_by_city_name);

router.get('/c_charges_by_CID/:id', c_chargesController.c_charges_by_CID);

module.exports = router;
