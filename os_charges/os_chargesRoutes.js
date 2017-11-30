var express = require('express');
var router = express.Router();
var os_chargesController = require('./os_chargesController.js');

/*
 * GET
 */
router.get('/', os_chargesController.list);

/*
 * GET
 */
router.get('/:id', os_chargesController.show);

/*
 * POST
 */
router.post('/', os_chargesController.create);

/*
 * PUT
 */
router.put('/:id', os_chargesController.update);

/*
 * DELETE
 */
router.delete('/:id', os_chargesController.remove);



router.get('/os_charges_by_DID/:id', os_chargesController.os_charges_by_DID);

module.exports = router;
