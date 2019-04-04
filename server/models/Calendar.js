const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({

  meal: {
    type: String,
    enum: ["breakfast", "lunch", "snack", "dinner"],
    default: ""
  },
  day: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    default: ""
  },
  recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }]

},
    {
        timestamps: true
    });

const Calendar = mongoose.model('Calendar', calendarSchema);
module.exports = Calendar;

