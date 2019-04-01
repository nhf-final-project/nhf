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
    
    // const{prediction, price, startDate, endDate } = req.body
        console.log(req.params.id, "receta")

    const recipeId = req.params.id

    // const newPrediction = new Prediction ({cryptocurrency, user, prediction, price, startDate, endDate})

    // newPrediction.save()
    // .then(newprediction  => {
        User.findByIdAndUpdate( req.user._id, { $addToSet: {recipes: recipeId}})
            .then(data => res.json(data))
            .catch(err => {console.log('Error while updating a recipe collection', err)}
        )
    // })
    // .catch(error      => {
    //     res.render('createCryptoPrediction', {
    //     errorMsg: `Please enter all input.`
    //     })
    // })


    // Recipe.findById(req.params.id)
    //   .then(data => res.json(data))
    //   .catch(err => console.log(err))
})


// recipesRoutes.post('/recipes', (req, res, next) => {

//   console.log(req.body)

//   const{ uri, label, image, dietLabels, healthLabels, ingredientLines, calories, totalWeight, totalTime, totalNutrients, totalDaily, digest } = req.body
   
//     Recipe.findOne({uri}, (err, foundRecipe) => {

//         if (err) {
//             res.status(500).json({ message: "recipe check went bad." });
//             return;
//         }

//         if (foundRecipe) {
//             console.log(foundRecipe)
//             res.status(200).json(foundRecipe);        
//         }

//         const aNewRecipe = new Recipe({ uri, label, image, dietLabels, healthLabels, ingredientLines, calories, totalWeight, totalTime, totalNutrients, totalDaily, digest});

//         aNewRecipe.save(err => {
//           if (err) {
//               res.status(400).json({ message: 'Saving user to database went wrong.' });
//               return;
//           }
          
//           res.status(200).json(aNewRecipe);

//         })
//     });
// });


module.exports = recipesRoutes;