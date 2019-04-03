const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({

    
        breakfast: {
            Monday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
    
            },
            Tuesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
        
            },
            Wednesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
          
            },
            Thursday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
         
            },
            Friday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
         
            },
            Saturday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
        
            },
            Sunday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
          
            }
        },
        lunch: {
            Monday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
           
            },
            Tuesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Wednesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Thursday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
   
            },
            Friday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
          
            },
            Saturday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
  
            },
            Sunday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            }
        },
        snack: {
            Monday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Tuesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],
  
            },
            Wednesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Thursday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Friday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Saturday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Sunday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            }
        },
        dinner: {
            Monday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Tuesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Wednesday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Thursday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Friday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Saturday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            },
            Sunday: {
                type: [{type:Schema.Types.ObjectId, ref:'Recipe'}],

            }
        } 

    

},
    {
        timestamps: true
    });

const Calendar = mongoose.model('Calendar', calendarSchema);
module.exports = Calendar;

