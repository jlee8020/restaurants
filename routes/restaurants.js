const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

//user added restaurants
router.get('/', restaurantsCtrl.index);
// router.get('/restaurants', restaurantsCtrl.index);

//View a form for submitting a restaurant//before show
router.get('/new', isLoggedIn, restaurantsCtrl.new);


//View the details any restaurant
// router.get('/:id', restaurantsCtrl.show);
router.get('/:id', restaurantsCtrl.show);


//Handle the new restaurant form being submitted // my new in view
router.post('/', isLoggedIn, restaurantsCtrl.create);

//view a form for editing a restaurant //restricted to user creating restaurant
router.get('/:id/edit', isLoggedIn, restaurantsCtrl.edit) 

//Handle the edit restaurant form being submitted (restrict to user who created the restaurant)
//changed from
// router.put('/update/:id', restaurantsCtrl.update);
router.put('/:id', isLoggedIn, restaurantsCtrl.update)

//Delete a restaurant (restrict to user who submitted the restaurant)

router.get('/update/:id', isLoggedIn, restaurantsCtrl.showUpdate);
router.put('/update/:id', isLoggedIn, restaurantsCtrl.update);
router.delete('/:id',isLoggedIn, restaurantsCtrl.delete);
router.put('/:id', isLoggedIn, restaurantsCtrl.update)

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}