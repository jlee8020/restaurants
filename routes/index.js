var express = require('express')
// var router = express.Router();
const router = require('express').Router();
const passport = require('passport');

/* GET home page. */
//added
router.get('/', function(req, res) {
  res.redirect('/users');
});


router.get('/', function(req, res, next) {
  res.redirect('/auth/google');
});

//initial view before change//
router.get('/', function(req, res, next) {
  res.redirect('/auth/google');
});

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { 
    scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/restaurants',
    failureRedirect: '/auth/google'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/auth/google');
});

module.exports = router;
