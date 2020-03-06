const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

//user added restaurants
router.get('/', restaurantsCtrl.index);
// router.get('/restaurants', restaurantsCtrl.index);

//View a form for submitting a restaurant//before show
router.get('/new', restaurantsCtrl.new);

//all restaurants all users
router.get('/all', restaurantsCtrl.allRestaurants);


//View the details any restaurant
// router.get('/:id', restaurantsCtrl.show);
router.get('/:id', restaurantsCtrl.show);


//Handle the new restaurant form being submitted // my new in view
router.post('/', restaurantsCtrl.create);

//view a form for editing a restaurant //restricted to user creating restaurant
router.get('/:id/edit', restaurantsCtrl.edit) 

//Handle the edit restaurant form being submitted (restrict to user who created the restaurant)
//changed from
// router.put('/update/:id', restaurantsCtrl.update);
router.put('/:id', restaurantsCtrl.update)

//Delete a restaurant (restrict to user who submitted the restaurant)
// router.delete('/:id',restaurantsCtrl.delete);


//adding to FAVE Restaurants


router.get('/update/:id', restaurantsCtrl.showUpdate);
router.put('/update/:id', restaurantsCtrl.update);
router.delete('/:id',restaurantsCtrl.delete);
router.post('/:id', restaurantsCtrl.addFave)
router.put('/:id', restaurantsCtrl.update)

module.exports = router;