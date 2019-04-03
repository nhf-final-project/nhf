const express = require('express');
const profileRoutes = express.Router();

const Recipe = require('../models/Recipe');
const User = require('../models/User');
const Calendar = require('../models/Calendar');



profileRoutes.post('/profile', (req, res, next) => {
    User.findById(req.user._id)
    .populate("recipes")
    .then(user => res.json({recipes:user.recipes}))
    .catch(err => {
        console.log('Error while finding one markerCoins', err)
        next()
    })
})


profileRoutes.post('/profile/edit', (req, res, next) => {
    
    console.log(req.body.edit)
    console.log(req.user)
    const {username, height, weight, age, waist, hip, neck, bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal } = req.body.edit

    User.findByIdAndUpdate(req.user._id, { $set: {username, height, weight, age, waist, hip, neck, bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal}},{new:true})
    .populate("recipes")
    .then(user => res.json({user}))
    .catch(err => {
        console.log('Error while finding one markerCoins', err)
        next()
    })

})


profileRoutes.post('/profile/addRecipe', (req, res, next) => {
    
    // console.log(req.body)
    console.log(req.user)

    // const {username, height, weight, age, waist, hip, neck, bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal } = req.body
    // Calendar.findByIdAndUpdate(req.user.calendar, { $set: {breakfast: }},{new:true})

    // User.findByIdAndUpdate(req.user._id, {calendar: req.body.calendar}, {new:true})
    //   .populate({
    //       path: 'calendar_id', model: 'Calendar',
    //          populate: {path: 'recipes_id', model: 'Recipe'}
    //   }).exec(function(err,data){ 
    //     if(!err){
    //        console.log('data all',data)
    //        return data
    //      }
    //      else{
    //        console.log('err err err',err)
    //       }
    //     })
    //   .then(user => res.json({user}))
    //   .catch(err => {
    //       console.log('Error while finding one markerCoins', err)
    //       next()
    // })
        
})


module.exports = profileRoutes;

