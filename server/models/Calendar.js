const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({

    meals: {
        breakfast: {
            Monday: {
                type: Array,
                required: true,
            },
            Tuesday: {
                type: Array,
                required: true,
            },
            Wednesday: {
                type: Array,
                required: true,
            },
            Thursday: {
                type: Array,
                required: true,
            },
            Friday: {
                type: Array,
                required: true,
            },
            Saturday: {
                type: Array,
                required: true,
            },
            Sunday: {
                type: Array,
                required: true,
            }
        },
        lunch: {
            Monday: {
                type: Array,
                required: true,
            },
            Tuesday: {
                type: Array,
                required: true,
            },
            Wednesday: {
                type: Array,
                required: true,
            },
            Thursday: {
                type: Array,
                required: true,
            },
            Friday: {
                type: Array,
                required: true,
            },
            Saturday: {
                type: Array,
                required: true,
            },
            Sunday: {
                type: Array,
                required: true,
            }
        },
        snack: {
            Monday: {
                type: Array,
                required: true,
            },
            Tuesday: {
                type: Array,
                required: true,
            },
            Wednesday: {
                type: Array,
                required: true,
            },
            Thursday: {
                type: Array,
                required: true,
            },
            Friday: {
                type: Array,
                required: true,
            },
            Saturday: {
                type: Array,
                required: true,
            },
            Sunday: {
                type: Array,
                required: true,
            }
        },
        dinner: {
            Monday: {
                type: Array,
                required: true,
            },
            Tuesday: {
                type: Array,
                required: true,
            },
            Wednesday: {
                type: Array,
                required: true,
            },
            Thursday: {
                type: Array,
                required: true,
            },
            Friday: {
                type: Array,
                required: true,
            },
            Saturday: {
                type: Array,
                required: true,
            },
            Sunday: {
                type: Array,
                required: true,
            }
        }          
    },
    
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]
},
    {
        timestamps: true
    });

const Calendar = mongoose.model('User', calendarSchema);
module.exports = Calendar;

