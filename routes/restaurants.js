const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

//user added restaurants
router.get('/', restaurantsCtrl.index);
// router.get('/restaurants', restaurantsCtrl.index);

//all restaurants all users
router.get('/restaurants/all', restaurantsCtrl.allRestaurants);

//View a form for submitting a restaurant//before show
router.get('/restaurants/new', restaurantsCtrl.new);

//View the details any restaurant
// router.get('/:id', restaurantsCtrl.show);
router.get('/restaurants/:id', restaurantsCtrl.show);


//Handle the new restaurant form being submitted // my new in view
router.post('/restaurants', restaurantsCtrl.create);

//view a form for editing a restaurant //restricted to user creating restaurant
router.get('/restaurants/:id/edit', restaurantsCtrl.edit) 

//Handle the edit restaurant form being submitted (restrict to user who created the restaurant)
//changed from
// router.put('/update/:id', restaurantsCtrl.update);
router.put('restaurants/:id', restaurantsCtrl.update)

//Delete a restaurant (restrict to user who submitted the restaurant)
// router.delete('/:id',restaurantsCtrl.delete);

router.delete('/restaurants/:id',restaurantsCtrl.delete);

//adding to FAVE Restaurants
router.post('restaurants/:id', restaurantsCtrl.addFave)


router.get('/update/:id', restaurantsCtrl.showUpdate);
router.post('/update/:id', restaurantsCtrl.update);


module.exports = router;