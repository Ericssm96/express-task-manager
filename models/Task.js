const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide a task name."], // I could just set this to true, but
                                                    // since I can edit the error message
                                                    // too, I'll do it
      trim: true,
      maxLength: [30, "Name can't have more than 30 characters."]
    },
    completed: {
      type: Boolean,
      default: false
    }
  }
); // defining the schema structure

module.exports = mongoose.model('Task', TaskSchema); // Here I define the name of the
                                                     // document this schema should
                                                     // create