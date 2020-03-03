const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

router.get('/', restaurantsCtrl.index);
router.get('/new', restaurantsCtrl.new);
router.get('/update/:id', restaurantsCtrl.showUpdate);
router.get('/:id', restaurantsCtrl.show);
router.post('/', restaurantsCtrl.create);
router.delete('/:id',restaurantsCtrl.delete);

router.post('/update/:id', restaurantsCtrl.update);
router.put('/update/:id', restaurantsCtrl.update);


module.exports = router;