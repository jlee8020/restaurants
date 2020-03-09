var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');


//get users
// router.get('/users', usersCtrl.index);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// router.get("/:id", isLoggedIn, usersCtrl.show);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
module.exports = router;
