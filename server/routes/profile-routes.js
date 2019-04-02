const express = require('express');
const profileRoutes = express.Router();

const Recipe = require('../models/Recipe');
const User = require('../models/User');

profileRoutes.post('/profile', (req, res, next) => {
    User.findById(req.user._id)
    .populate("recipes")
    .then(user => res.json({recipes:user.recipes}))
    .catch(err => {
        console.log('Error while finding one markerCoins', err)
        next()
    })
})


module.exports = profileRoutes;