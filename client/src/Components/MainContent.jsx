// import React, { useEffect, useState } from 'react';
// import TaskCard from './TaskCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteTask } from '../redux/tasksSlice';
// import { Col, Row } from 'react-bootstrap';
// import axios from 'axios';
// export default function MainContent({ setTaskCount, onToggleImportant, onToggleStatus, filter, sortOption, searchTerm,routeName }) {
//   const tasks = useSelector((state) => state.tasks.tasks);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const dispatch = useDispatch();
//   // const [tasks, setTasks] = useState([]);
//   const [directories, setDirectories] = useState([]);
 

//   useEffect(() => {


//   //   axios.get('http://localhost:5000/api/tasks')
//   //   .then(response => setTasks(response.data))
//   //   .catch(error => console.error('Error fetching tasks:', error));

  
//   // axios.get('http://localhost:5000/api/directories')
//   //   .then(response => setDirectories(response.data))
//   //   .catch(error => console.error('Error fetching directories:', error));






//     let filtered = (() => {
//       switch (filter) {
//         case "important":
//           return tasks.filter((task) => task.isImportant);
//         case "completed":
//           return tasks.filter((task) => task.status === "completed");
//         case "uncompleted":
//           return tasks.filter((task) => task.status === "uncompleted");
//         default:
//           return tasks;
//       }
//     })();

   
//     if (searchTerm) {
//       filtered = filtered.filter(task =>
//         task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         task.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

    
//     if (sortOption) {
//       filtered = [...filtered].sort((a, b) => {
//         switch (sortOption) {
//           case "Date":
//             return new Date(a.date) - new Date(b.date);
//           case "Priority":
//             return b.isImportant - a.isImportant;
//           case "Status":
//             return a.status.localeCompare(b.status);
//           case "Title":
//             return a.title.localeCompare(b.title);
//           default:
//             return 0;
//         }
//       });
//     }

//     setFilteredTasks(filtered);
//     setTaskCount(filtered.length);
//   }, [tasks, filter, sortOption, searchTerm]);  





//   return (
//     <div className="d-flex flex-wrap justify-content-around">
//       {filteredTasks.map((task, index) => (
        
//         <TaskCard
//           key={task.id}
//           directory={task.directory} 
//           title={task.title}
//           description={task.description}
//           date={task.date}
//           status={task.status}
//           isImportant={task.isImportant}
//           onToggleImportant={() => onToggleImportant(task.id)}
//           onToggleStatus={() => onToggleStatus(task.id)}
//           taskId={task.id}
//           style={{ backgroundColor: index === 0 ? 'purple' : 'transparent' }}
//           onDeleteTask={() => dispatch(deleteTask(task.id))}
//         />
//       ))}
//     </div>




// //  <Row className="d-flex justify-content-around">
// //   {filteredTasks.map((task, index) => (
// //     <Col xs={12} sm={6} md={4} lg={3} key={task.id}> 
// //       <TaskCard
// //         key={task.id}
// //         directory={task.directory}
// //         title={task.title}
// //         description={task.description}
// //         date={task.date}
// //         status={task.status}
// //         isImportant={task.isImportant}
// //         onToggleImportant={() => onToggleImportant(task.id)}
// //         onToggleStatus={() => onToggleStatus(task.id)}
// //         taskId={task.id}
// //         onDeleteTask={() => dispatch(deleteTask(task.id))}
// //       />
// //     </Col>
// //   ))}
// // </Row> 



//   );
// }






import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';
import { useParams } from 'react-router-dom';

export default function MainContent({
  setTaskCount,
  onToggleImportant,
  onToggleStatus,
  filter,
  sortOption,
  searchTerm,
}) {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const dispatch = useDispatch();
  const { directory } = useParams(); 
  
  useEffect(() => {
    
    let filtered = tasks;

    if (directory) {
      filtered = filtered.filter((task) => task.directory === directory);
    }

    
    switch (filter) {
      case "important":
        filtered = filtered.filter((task) => task.isImportant);
        break;
      case "completed":
        filtered = filtered.filter((task) => task.status === "completed");
        break;
      case "uncompleted":
        filtered = filtered.filter((task) => task.status === "uncompleted");
        break;
      default:
        break;
    }

   
    if (searchTerm) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    
    if (sortOption) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case "Date":
            return new Date(a.date) - new Date(b.date);
          case "Priority":
            return b.isImportant - a.isImportant;
          case "Status":
            return a.status.localeCompare(b.status);
          case "Title":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
    }

    setFilteredTasks(filtered);
    setTaskCount(filtered.length);
  }, [tasks, filter, sortOption, searchTerm, directory, setTaskCount]);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
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
        <p>No tasks to show</p>
      )}
    </div>
  );
}



