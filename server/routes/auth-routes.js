const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
// const Calendar = require("../models/Calendar")

authRoutes.post('/signup', (req, res, next) => {
    console.log(req.body)
    const { username, email, password, gender, height, weight, age, waist, hip, neck,
        bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal } = req.body

    if (!email || !password) { res.status(400).json({ message: 'Provide email and password' }); return; }
    if (password.length < 5) {
        res.status(400).json({ message: 'Please make your password at least 6 characters long for security purposes.' });
        return;
    }

    User.findOne({ email }, (err, foundUser) => {
        if (err) { res.status(500).json({ message: "email check went bad." }); return; }
        if (foundUser) { res.status(400).json({ message: 'email taken. Choose another one.' }); return; }

        // Calendar.create({
            
        //         breakfast: {
        //             Monday: [],Tuesday: [],Wednesday: [],Thursday: [],Friday: [],Saturday: [],Sunday: []
        //         },
        //         lunch: {
        //             Monday: [],Tuesday: [],Wednesday: [],Thursday: [],Friday: [],Saturday: [],Sunday: []
        //         },
        //         snack: {
        //             Monday: [],Tuesday: [],Wednesday: [],Thursday: [],Friday: [],Saturday: [],Sunday: []
        //         },
        //         dinner: {
        //             Monday: [],Tuesday: [],Wednesday: [],Thursday: [],Friday: [],Saturday: [],Sunday: []
        //         }
                

        // }).then(calendar => {

            const salt = bcrypt.genSaltSync(10);
            const hashPass = bcrypt.hashSync(password, salt);
            const aNewUser = new User({
                username, email, password: hashPass, gender, height, weight, age, waist, hip, neck,
                bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal //calendar: calendar._id
            });
    
            aNewUser.save(err => {
                if (err) { res.status(400).json({ message: 'Saving user to database went wrong.' }); return; }
                // Automatically log in user after sign up  .login() here is actually predefined passport method
                req.login(aNewUser, (err) => {
                    if (err) { res.status(500).json({ message: 'Login after signup went bad.' }); return; }
                    // Send the user's information to the frontend. We can use also: res.status(200).json(req.user);
                    res.status(200).json(aNewUser);
                });
            });


        // })

    });
});

authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) { res.status(500).json({ message: 'Something went wrong authenticating user' }); return; }
        // "failureDetails" contains the error messages from our logic in "LocalStrategy" { message: '...' }.
        if (!theUser) { res.status(401).json(failureDetails); return; }
        // save user in session
        req.login(theUser, (err) => {
            if (err) { res.status(500).json({ message: 'Session save went bad.' }); return; }
            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});

authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;