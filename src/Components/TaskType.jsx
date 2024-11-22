import React from 'react';
import TaskCard from './TaskCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';

export default function Taskdirectory({onToggleImportant,onToggleStatus}) {
  const { directory } = useParams(); 
  const tasksdirectory = useSelector((state) => state.tasks.tasks); 
const dispatch = useDispatch();
  
  const filteredTasks = tasksdirectory.filter((task) => task.directory === directory);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task,index) => (
          <TaskCard
          key={task.id}
          directory={task.directory} 
          title={task.title}
          description={task.description}
          date={task.date}
          status={task.status}
          isImportant={task.isImportant}
          onToggleImportant={() => onToggleImportant(task.id)}
          onToggleStatus={() => onToggleStatus(task.id)}
          taskId={task.id}
          style={{ backgroundColor: index === 0 ? 'purple' : 'transparent' }}
          onDeleteTask={() => dispatch(deleteTask(task.id))}
        />
        ))
      ) : (
        <p>No Tasks for {directory}</p>
      )}
    </div>
  );
}






