import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  directories: [{ id: '1', name: 'Main' }, { id: '2', name: 'Secondary' }],
};

const directoriesSlice = createSlice({
  name: 'directories',
  initialState,
  reducers: {
    
    addDirectory: (state, action) => {
      const newDirectory = action.payload; 
      state.directories.push(newDirectory); 
    },


  


    
    deleteDirectory: (state, action) => {
      state.directories = state.directories.filter(
        (directory) => directory.id !== action.payload
      );
    },
  },
});

export const { addDirectory, deleteDirectory } = directoriesSlice.actions;
export default directoriesSlice.reducer;
