const Restaurant = require('../models/restaurant');

module.exports = {
  create,
  delete: deleteNow,
  update,
  // edit
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

function update(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Restaurant.findOne({'experiences._id': req.params.id}, function(err, book) {
    // Find the comment subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const ExperienceSubdoc = restaurant.experiences.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!experienceSubdoc.userId.equals(req.user._id)) return res.redirect(`/restaurants/${restaurant._id}`);
    // Update the text of the comment
    restaurantSubdoc.text = req.body.text;
    // Save the updated book
    restaurant.save(function(err) {
      // Redirect back to the book's show view
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}

