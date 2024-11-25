import React from 'react';

import TaskCard from './TaskCard';

export default function TaskList({tasks}) {
 

  
  const importantTasks = tasks.filter(task => task.isImportant);

  return (
   
    <>
                 

<div className="d-flex flex-wrap justify-content-around">
  {importantTasks.map((task) => (
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

