const express = require('express');
const router = express.Router();
const addsCtrl = require('../controllers/adds');

router.post('/restaurants/:id/adds', addsCtrl.create);

module.exports = router;