const express = require('express');
const { getAllTasks, createNewTask, getTasksByDirectory, updateTask, deleteTask, } = require('../controllers/tasks');
const router = express.Router();



router.get('/' , getAllTasks);


router.post('/' , createNewTask );

router.get('/directories/:dirId/tasks' , getTasksByDirectory);

router.put('/:id' , updateTask);

router.delete('/:id' , deleteTask);


module.exports = router;