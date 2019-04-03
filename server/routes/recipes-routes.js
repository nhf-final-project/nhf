const express = require('express');
const recipesRoutes = express.Router();
const axios = require('axios')
const rp = require('request-promise')
const Recipe = require('../models/Recipe');
const User = require('../models/User');

recipesRoutes.get('/recipes', (req, res, next) => {
    Recipe.find()
      .then(data => res.json(data))
      .catch(err => console.log(err))
})

recipesRoutes.get("/recipes/:id", (req, res) => {
    Recipe.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => console.log(err))
})

recipesRoutes.post("/recipes/:id", (req, res) => {
  
    const recipeId = req.params.id

    User.findByIdAndUpdate( req.user._id, { $addToSet: {recipes: recipeId}})
        .then(data => res.json(data))
        .catch(err => {console.log('Error while updating a recipe collection', err)}
    )
})



module.exports = recipesRoutes;