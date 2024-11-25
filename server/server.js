const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const directoriesRouter = require('./routes/directories');
const tasksRouter = require('./routes/tasks');
require('dotenv').config();
const logger = require('./middleware/logger');
const connectDB = require('./db/connecDB');
const Task = require('./models/Task');


const app = express();
app.use(logger);
app.use(cors());

app.use(express.json()); 

// mongoose.connect('mongodb+srv://IAmMahsaMirzavand:IAmMahsaMirzavand@cluster0.cszst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').

// then(() => {

//     console.log('Connected to MongoDB');
// }).catch((err) => {
// console.log('Error connecting to MongoDB ', err);

// });



// app.get('/', (req, res) => {
//     res.send('Welcome to the Task Manager API!');
//   });


// app.get('/', async (req, res) => {
//     const { page = 1, limit = 10 } = req.query; 
//     try {
//       const tasks = await Task.find()
//         .skip((page - 1) * limit)
//         .limit(parseInt(limit));
//       res.status(200).json(tasks);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  


app.use('/api/tasks' , tasksRouter);
app.use('/api/directories' , directoriesRouter);




const port = process.env.PORT || 5000 ;

// app.listen(port, () => {

// console.log(`Server is running  on port ${port}`);

// });




async function start() {

    try {
      
        await connectDB("mongodb+srv://IAmMahsaMirzavand:IAmMahsaMirzavand@cluster0.cszst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to MongoDB');
        
        app.listen(port, () => {

            console.log('Server run on port' , port);
        });
    } catch (error) {
        
        console.log(error);
    };
};

start()