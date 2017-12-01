var express = require('express');
var router = express.Router();
var cityController = require('./cityController.js');

/*
 * GET
 */
router.get('/', cityController.list);

/*
 * GET
 */
router.get('/:id', cityController.show);

/*
 * POST
 */
router.post('/', cityController.create);

/*
 * PUT
 */
router.put('/:id', cityController.update);

/*
 * DELETE
 */
router.delete('/:id', cityController.remove);


/*
 * GET
 */


module.exports = router;
