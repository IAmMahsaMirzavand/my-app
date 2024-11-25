const Task = require("../models/Task")


 const getAllTasks = async (req,res) => {

    try {
          
        const tasks = await Task.find({}).populate('dirId');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



 const createNewTask = async (req,res) => {

    const { title, description, completed, important, deadline, dirId } = req.body
    try {
         
        const newTask = new Task({ title, description, completed, important, deadline, dirId });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


  const getTasksByDirectory = async (req,res) => {

    try {
        
        const tasks = await Task.find({dirId : req.params.dirId});
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
 };



  const updateTask = async (req,res) => {

    try {
        
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
 };



 const deleteTask = async (req,res) => {

    try {
        
        await Task.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


module.exports = {getAllTasks,createNewTask,getTasksByDirectory,updateTask,deleteTask}