let mongoose = require('mongoose');
mongoose.connect("mongod://localhost/planner");

  let scheduleSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    details:  {
        type: String,
        required: true
    },
    start: {
        type: Number,
    },
    length: {
        type: Number,
    },
    category: {
        type: String,
        required: true,
    }
  });

let Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;

// WORK 
// EDUCATION
// FUN
// CHORES
// SELFCARE