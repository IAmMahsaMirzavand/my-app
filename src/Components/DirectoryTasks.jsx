import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DirectoryTasks = () => {
  const { directoryId } = useParams(); 
  const tasks = useSelector((state) => 
    state.tasks.tasks.filter(task => task.directoryId === directoryId)
  ); 

  return (
    <div>
      <h2>Tasks in Directory</h2>
      {tasks.length === 0 ? (
        <p>No tasks found for this directory.</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            
          </div>
        ))
      )}
    </div>
  );
};

export default DirectoryTasks;
