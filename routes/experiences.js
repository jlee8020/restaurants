const express = require('express');
const router = express.Router();
const experiencesCtrl = require('../controllers/experiences');

router.post('/restaurants/:id/experiences', experiencesCtrl.create);

module.exports = router;
