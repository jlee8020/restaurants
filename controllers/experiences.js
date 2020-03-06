const Restaurant = require('../models/restaurant');

module.exports = {
  create,
  delete: deleteNow,
};

function create(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    restaurant.experiences.push(req.body);
    restaurant.save(function(err) {
      if (err) return res.redirect(`/restaurants/${req.params.id}`);
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}
function deleteNow(req, res) {
  Restaurant.findOne({'experiences._id': req.params.id}, function(err, restaurant) {
    const experienceSubdoc = restaurant.experiences.id(req.params.id);

    if (!experienceSubdoc.userId.equals(req.user._id)) return res.redirect(`/restaurants/${restaurant._id}`);

    experienceSubdoc.remove();

    experience.save(function(err) {

      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}

