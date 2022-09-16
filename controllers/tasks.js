const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch(err) {
    res.status(500).json({message: "There was an error retrieving the data."})
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task}); // returns an object with the task property set to the value stored in
    // the task variable, it's the same as {task: task}
  } catch (err) {
    res.status(500).json({success: false, message: "The name provided isn't valid"})
  }
}

const getTask = async (req, res) => {
  try {
    const {id: taskID} = req.params // destructuring the id property in the req.params
    // object to a variable named taskID
    const task = await Task.findOne({_id: taskID});

    if(!task){
      return res.status(404).json({message: `Could not find task with id ${taskID}.`})
    }

    res.status(200).json({task});
  } catch (err) {
    res.status(500).json({message: err})
  }
}

const updateTask = async (req, res) => {
  try{
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
      new: true,
      runValidators: true
    })

    if(!task){
      return res.status(404).json({msg: `Could not find task with id ${taskID}.`})
    }

    res.status(200).json({task});
  } catch(err){
    res.status(500).json({msg: "Cannot set this value."})
  }
}

const deleteTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});

    if(!task){
      return res.status(404).json({msg: `No item with id ${taskID} found.`})
    }

    res.status(200).json({task});
  } catch (err) {
    res.status(500).json({msg: err})
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}