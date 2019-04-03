const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({

  meal: {
    type: String,
    enum: ["breakfast", "lunch", "snack", "dinner"]
  },
  day: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }

},
    {
        timestamps: true
    });

const Calendar = mongoose.model('Calendar', calendarSchema);
module.exports = Calendar;

