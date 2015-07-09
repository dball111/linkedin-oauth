var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('monk')(process.env.MONGOLAB_URI || 'localhost/mydb')


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
// passport.use(new LinkedInStrategy({
//     clientID: process.env.LINKEDIN_CLIENT_ID,
//     clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//     callbackURL: process.env.HOST + "/auth/linkedin/callback",
//     scope: ['r_emailaddress', 'r_basicprofile'],
//     state: true
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // here, find or create a document in the user collection, and update it's contents
//     // NOTE: the profile object is unnecessarily big.  Only store the parts you care about here.
//     done(null, {id: profile.id, displayName: profile.displayName, token: accessToken})
//   }
// ));

module.exports = router;
