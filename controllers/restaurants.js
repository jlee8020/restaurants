const Restaurant = require('../models/restaurant');

module.exports = {
    index,
    new: newRestaurant,
    create,
}

function index(req, res) {
    Restaurant.find({}, function(err, restaurants) {
        if (err) {
            console.log(err);
        } else {
        res.render('restaurants/index', {title: 'Restaurant List', restaurants, user: req.user});
        }
    });
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title: 'Add New Restaurant' });
  }

  function create(req, res) {
    var restaurant = new Restaurant(req.body);
    console.log(req.body);
    restaurant.save(function(err) {
        if (err) {
            console.log(err)
            return res.render('restaurants/new');}
            console.log('Added restaurant to database: ' + restaurant);
        // res.redirect('/restaurants/index');
            res.redirect('/restaurants');

    });
}
// ${restaurant._id}