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
      required: true
    },
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    age: {type: Number, required: true},
    waist: {type: Number, required: true},
    hip: {type: Number, required: true},
    neck: {type: Number, required: true},
    bodyFat: {type: Number, required: true },
    bodyMusscle: {type: Number, required: true },
    tmb: {type: Number, required: true },
    trainingDays: {
      type: String,
      enum: ['1', '2', '3', '4', '5', '6', '7'],
      default: '1',
      required: true
    },
    indexWH: {type: Number },
    activityLevel: {
      type: String,
      enum: ['sedentary', 'moderate', 'active', 'very active'],
      required: true
    },
    goal: {
      type: String,
      enum: ['lose weight', 'maintain', 'build muscle'],
      default: 'maintain',
      required: true
    },
    weightGoal: {type: Number, required: true},
    image: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Leonardo%27s_Avatar.png"
    },
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    calendars: [{ type: Schema.Types.ObjectId, ref: 'Calendar' }],
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
module.exports = User;