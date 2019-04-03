const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');

passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, userDocument);
    });
});

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
},(username, password, next) => {
    User.findOne({ username })
    .populate("calendar")
    .then(foundUser => {
       
        if (!foundUser) {
            next(null, false, { message: 'Incorrect username.' });
            return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
            next(null, false, { message: 'Incorrect password.' });
            return;
        }

        next(null, foundUser);
    })
    .catch(err=> next(err))
}));