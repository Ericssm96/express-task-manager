const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        name: String,
        completed: Boolean
    }
); // defining the schema structure

module.exports = mongoose.model('Task', TaskSchema); // Here I define the name of the document this schema should create