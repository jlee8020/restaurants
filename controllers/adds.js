const Restaurant = require('../models/restaurant');

module.exports = {
  create
};

function create(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
   restaurant.adds.push(req.body);
   restaurant.save(function(err) {
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}