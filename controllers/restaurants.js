const Restaurant = require('../models/restaurant');

module.exports = {
    index,
    new: newRestaurant,
    create,
    show,
    delete: deleteOne,
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
    res.render('restaurants/new');
  }

  function create(req, res) {
    var restaurant = new Restaurant(req.body);
    console.log(req.body);
    restaurant.save(function(err) {
        if (err) 
            return res.render('restaurants/new');
            console.log('Added restaurant to database: ' + restaurant);
        // res.redirect('/restaurants/index');
            res.redirect('/restaurants');

    });

}
// ${restaurant._id}
function show(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
      res.render('restaurants/show', { title: 'Restaurant Detail', restaurant});
    });
  }

  function deleteOne(req, res) {
    Restaurant.findByIdAndDelete(req.params.id, function(err, restaurant){
        if (err) {
            console.log(err);
        } else {
        console.log('deleting: ' + restaurant);
        }
    })
    res.redirect('/restaurants')
}