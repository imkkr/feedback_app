/** @format */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const extistingUser = await User.findOne({ googleId:profile.id });
      if(extistingUser){
        done(null,extistingUser);
      } else {
        const newUser =  await new User({ googleId:profile.id }).save();
        done(null,newUser)
      }
      // User.findOne({ googleId: profile.id }).then((existingUser) => {
      //   if (existingUser) {
      //     //user already exists
      //     done(null, existingUser);
      //   } else {
      //     new User({ googleId: profile.id }).save().then((user) => {
      //       done(null, user);
      //     });
      //   }
      // }
    }
  )
);