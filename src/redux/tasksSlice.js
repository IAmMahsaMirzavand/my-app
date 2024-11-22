import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { id: 1, title: 'Task 1', description: 'This is the description for this task', status: 'uncompleted', isImportant: false, date: '30/12/2023', directory: 'Main'},
      { id: 2, title: 'Task 2', description: 'This is the description for this task', status: 'completed', isImportant: true, date: '30/12/2023', directory: 'Main'},
      { id: 3, title: 'Task 3', description: 'This is the description for this task', status: 'completed', isImportant: true, date: '30/12/2023', directory: 'Main' },
    ],
   
  },
  reducers: {



    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks.push(newTask);  
    },


  





    toggleTaskImportant: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.isImportant = !task.isImportant;
      }
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.status = task.status === 'completed' ? 'uncompleted' : 'completed';
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    deleteTasksByDirectory: (state, action) => {
      const directory= action.payload;
      state.tasks = state.tasks.filter(task => task.directory !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;  
      }
  },
  setTaskToEdit: (state, action) => {
    state.taskToEdit = action.payload; 
  },
},
});

export const { addTask, toggleTaskImportant, toggleTaskStatus, deleteTask, deleteTasksByDirectory, updateTask, setTaskToEdit } = tasksSlice.actions;
export default tasksSlice.reducer;
