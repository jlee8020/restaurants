const Restaurant = require('../models/restaurant');

module.exports = {
  create,
  // deleteOne,
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
// function deleteOne(req, res) {
//  Restaurant.Experience.findByIdAndDelete(req.params.id, function(err, experience){
//       if (err) {
//           console.log(err);
//       } else {
//       console.log('deleting: ' + experience);
//       }
//   })
//   res.redirect('/')
// }