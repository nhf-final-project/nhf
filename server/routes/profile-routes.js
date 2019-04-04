const express = require('express');
const profileRoutes = express.Router();

const Recipe = require('../models/Recipe');
const User = require('../models/User');
const Calendar = require('../models/Calendar');



profileRoutes.post('/profile', (req, res, next) => {
    User.findById(req.user._id)
        .populate("recipes")
        .then(user => res.json({ recipes: user.recipes }))
        .catch(err => {
            console.log('Error while finding one markerCoins', err)
            next()
        })
})


profileRoutes.post('/profile/edit', (req, res, next) => {

    console.log(req.body.edit)
    console.log(req.user)
    const { username, height, weight, age, waist, hip, neck, bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal } = req.body.edit

    User.findByIdAndUpdate(req.user._id, { $set: { username, height, weight, age, waist, hip, neck, bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal } }, { new: true })
        .populate("recipes")
        .then(user => res.json({ user }))
        .catch(err => {
            console.log('Error while finding one markerCoins', err)
            next()
        })

})

profileRoutes.post('/profile/getCalendarPrograms', (req, res) => {
    User.findById(req.user._id)
        // .populate('Calendar')
        .populate({
            path: 'calendars',
            populate: { path: 'recipe' }
        })
        .then(user => res.json({ user }))

        .catch(err => {
            console.log('Error while finding updating calendar', err)
        })
})


profileRoutes.post('/profile/addRecipe', (req, res, next) => {

    let { user, recipe, calendar } = req.body

    // console.log(user, recipe, calendar)

    Calendar.create({ meal: calendar.meal, day: calendar.day, recipe, user })
        .then(calendar => {

            User.findByIdAndUpdate(user, { $addToSet: { calendars: calendar._id } })
                // .populate('Calendar')
                .populate({
                    path: 'calendars',
                    populate: { path: 'recipe' }
                })
                .then(user => res.json({ user }))

                .catch(err => {
                    console.log('Error while finding updating calendar', err)
                })


        })

        .catch(err => {
            console.log('Error while updating a place', err)
            next()
        })
})


//     const{prediction, price, startDate, endDate } = req.body

// const user = req.params.id

// const newPrediction = new Prediction ({cryptocurrency, user, prediction, price, startDate, endDate})

// newPrediction.save()



// console.log(req.user)

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




module.exports = profileRoutes;

