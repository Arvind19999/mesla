var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
  
passport.serializeUser((user, cb) => {
    cb(null, user);
})

passport.deserializeUser((user, cb) => {
    cb(null, user);
})

passport.use(new FacebookStrategy({
    clientID: '471519913858652',
    clientSecret: "8fb12193b074efb20d36fa2e76596367",
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));