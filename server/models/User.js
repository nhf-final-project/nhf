const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    gender: {
      type: String,
      enum: ['male', 'female'],
      default: 'male',
    },
    height: {type: Number},
    weight: {type: Number},
    age: {type: Number},
    waist: {type: Number},
    hip: {type: Number},
    neck: {type: Number},
    bodyFat: {type: Number },
    bodyMusscle: {type: Number },
    tmb: {type: Number },
    trainingDays: {
      type: String,
      enum: ['1', '2', '3', '4', '5', '6', '7'],
      default: '1',
    },
    indexWH: {type: Number },
    activityLevel: {
      type: String,
      enum: ['sedentary', 'moderate', 'active', 'very active'],
    },
    goal: {
      type: String,
      enum: ['lose weight', 'maintain', 'build muscle'],
      default: 'maintain',
    },
    weightGoal: {type: Number}




    // gender: {
    //   type: String,
    //   enum: ['male', 'female'],
    //   required: true
    // },
    // height: {type: Number, required: true },
    // weight: {type: Number, required: true },
    // age: {type: Number, required: true },
    // waist: {type: Number, required: true },
    // neck: {type: Number, required: true },
    // bodyFat: {type: Number },
    // tmb: {type: Number },
    // trainingDays: {
    //   type: String,
    //   enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    //   required: true
    // },
    // indexWH: {type: Number },
    // activityLevel: {
    //   type: String,
    //   enum: ['sedentary', 'moderate', 'active', 'very active'],
    //   required: true
    // },
    // goal: {
    //   type: String,
    //   enum: ['lose weight', 'maintain', 'build muscle'],
    //   default: 'maintain',
    //   required: true
    // },
    // weightGoal: {type: Number, required: true }
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
module.exports = User;