const Restaurant = require('../models/restaurant');

module.exports = {
    index,
    new: newRestaurant,
}

function index(req,res){
    Restaurant.find({}, function (err, restaurants){
        res.render('restaurants/index', {title: 'Favorite Restaurants', restaurants});
    });
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title: 'Add Fave Restaurant' });
  }