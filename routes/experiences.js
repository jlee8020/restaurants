const express = require('express');
const router = express.Router();
const experiencesCtrl = require('../controllers/experiences');

//Handle the new experience form being submitted
router.post('/restaurants/:id/experiences', experiencesCtrl.create);

//View a form for editing an experience (restrict to user who submitted the experience)
// router.get('/experiences/:id/edit', experiencesCtrl.edit)


//Handle the edit experience form being submitted 
//(restrict to user who submitted the experience)
router.put('/:id', experiencesCtrl.update)

//Delete an experience (restrict to user who submitted the experience)
router.delete('/:id/:restaurantid', experiencesCtrl.delete);

module.exports = router;
