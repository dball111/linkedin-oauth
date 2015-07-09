var express = require('express');
var router = express.Router();
var passport = require('passport');
// var db = require('monk')(process.env.MONGOLAB_URI || 'localhost/mydb')


router.get('/auth/linkedin', passport.authenticate('linkedin'));

router.get('/logout', function (req, res, next) {
  req.session = null
  res.redirect('/')
});

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: '/',
    successRedirect: '/'
  }));


//mongodb stuff


module.exports = router;
