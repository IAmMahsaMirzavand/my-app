import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import directoriesReducer from './directoriesSlice'; 

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    directories: directoriesReducer,
  },
});

export default store;
