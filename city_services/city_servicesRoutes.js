var express = require('express');
var router = express.Router();
var city_servicesController = require('./city_servicesController.js');

/*
 * GET
 */
router.get('/', city_servicesController.list);

/*
 * GET
 */
router.get('/:id', city_servicesController.show);

/*
 * POST
 */
router.post('/', city_servicesController.create);

/*
 * PUT
 */
router.put('/:id', city_servicesController.update);

/*
 * DELETE
 */
router.delete('/:id', city_servicesController.remove);


/*
 * GET
 */
router.get('/services_by_city_name/:id', city_servicesController.services_by_city_name);

router.get('/services_by_CID/:id', city_servicesController.services_by_CID);




module.exports = router;
