const Restaurant = require('../models/restaurant');

module.exports = {
  create
};

function create(req, res) {
  console.log(req.body);
  Restaurant.findById(req.params.id, function(err, restaurant) {
    restaurant.experiences.push(req.body);
    restaurant.save(function(err) {
      if (err) return res.redirect(`/restaurants/${req.params.id}`);
      res.redirect(`/restaurants/${req.params.id}`);
    });
  });
}