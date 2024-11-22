import React, { useState } from 'react';
import TaskCard from './TaskCard';

export default function TaskItem({ tasks ,filterStatus}) {
 

 
  const filteredTasks = tasks.filter(task => task.status === filterStatus);
  
  return (
    <>
 
     
    

 <div className="d-flex flex-wrap justify-content-around">
  {filteredTasks.map((task) => (
    <TaskCard
      key={task.id}
      title={task.title}
      description={task.description}
      date={task.date}
      status={task.status}
      isImportant={task.isImportant}
      onEdit={() => {}}
      onDelete={() => {}}
      directory={task.directory}
    />
  ))}
</div>

    </>
  );
}
