const express = require('express');
const router = express.Router();
const experiencesCtrl = require('../controllers/experiences');

router.post('/restaurants/:id/experiences', experiencesCtrl.create);
router.delete('/experiences/:id', experiencesCtrl.delete);

module.exports = router;
