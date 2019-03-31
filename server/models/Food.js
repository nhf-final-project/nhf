const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodId: {type: String },
    label: {type: String },
    nutrients: {
        ENERC_KCAL: {type: Number },
        PROCNT: {type: Number },
        FAT: {type: Number },
        CHOCDF: {type: Number },
        FIBTG: {type: Number }
    },
    category: {type: String },
    categoryLabel: {type: String },
    foodContentsLabel: {type: String }
  } , { timestamps: true });

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;