const express = require('express');
const recipesRoutes = express.Router();
const Recipe = require('../models/Recipe');

recipesRoutes.post('/recipes', (req, res, next) => {

  console.log(req.body)

  const{ uri, label, image, dietLabels, healthLabels, ingredientLines, calories, totalWeight, totalTime, totalNutrients, totalDaily, digest } = req.body
   
    Recipe.findOne({uri}, (err, foundRecipe) => {

        if (err) {
            res.status(500).json({ message: "recipe check went bad." });
            return;
        }

        if (foundRecipe) {
            res.status(400).json({ message: 'recipe taken. Choose another one.' });
            return;
        }

        const aNewRecipe = new Recipe({ uri, label, image, dietLabels, healthLabels, ingredientLines, calories, totalWeight, totalTime, totalNutrients, totalDaily, digest});

        aNewRecipe.save(err => {
          if (err) {
              res.status(400).json({ message: 'Saving user to database went wrong.' });
              return;
          }
          
          res.status(200).json(aNewRecipe);

        })
    });
});


module.exports = recipesRoutes;