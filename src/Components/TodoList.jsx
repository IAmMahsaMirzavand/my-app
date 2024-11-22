// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
// import { Col, Container, Row } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import TaskHeader from './TaskHeader';
// import MainContent from './MainContent';
// import TaskType from './TaskType';  
// import { toggleTaskImportant, toggleTaskStatus } from '../redux/tasksSlice';
// import AddTaskModal from './AddTaskModal';

// export default function TodoList() {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks.tasks); 
//   const [taskCount, setTaskCount] = useState(tasks.length);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const location = useLocation();
//   const routeName = location.pathname.replace("/", "") || "ALL"; 
//   const [sortOption, setSortOption] = useState('Sort by');



//   const toggleImportant = (taskId) => {
//     dispatch(toggleTaskImportant(taskId)); 
//   };

//   const toggleStatus = (taskId) => {
//     dispatch(toggleTaskStatus(taskId)); 
//   };

//   useEffect(() => {
//     setTaskCount(tasks.length);
//   }, [tasks]);
  



//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#f4f6f8', overflow: 'hidden' }}>
//       <Container fluid style={{ height: '100vh', padding: '15px' }}>
//         <Row className="h-100">
//           <Col xs={12} md={2} className="p-0 d-none d-md-block">
//             <Sidebar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
//           </Col>

//           <Col xs={12} className="d-md-none">
//             <Sidebar setIsModalOpen={setIsModalOpen} />
//           </Col>

//           <Col xs={12} md={10} className="p-3" style={{ backgroundColor: 'white', borderRadius: '8px' }}>
//             <TaskHeader 
//               taskCount={taskCount} 
//               routeName={routeName} 
//               setIsModalOpen={setIsModalOpen} 
//               sortOptions={['Sort by', 'Date', 'Priority', 'Status', 'Title']} 
//               onSortChange={setSortOption}
            
//             />
//             {isModalOpen && <AddTaskModal setIsModalOpen={setIsModalOpen} />}
//             <Routes>
//               <Route path="/" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} sortOption={sortOption}/>} />
//               <Route path="/important" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} filter="important" sortOption={sortOption}/>} />
//               <Route path="/completed" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} filter="completed" sortOption={sortOption}/>} />
//               <Route path="/uncompleted" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} filter="uncompleted" sortOption={sortOption}/>} />
//               <Route path="/directory/:directory" element={<TaskType tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} sortOption={sortOption} />} />
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import TaskHeader from './TaskHeader';
import MainContent from './MainContent';
import TaskType from './TaskType';  
import { toggleTaskImportant, toggleTaskStatus } from '../redux/tasksSlice';
import AddTaskModal from './AddTaskModal';
export default function TodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskCount, setTaskCount] = useState(tasks.length);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const routeName = location.pathname.replace("/", "") || "ALL";
  const [sortOption, setSortOption] = useState('Sort by');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleImportant = (taskId) => {
    dispatch(toggleTaskImportant(taskId));
  };

  const toggleStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    setTaskCount(tasks.length);
  }, [tasks]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f6f8', overflow: 'hidden' }}>
      <Container fluid style={{ height: '100vh', padding: '15px' }}>
        <Row className="h-100">
          <Col xs={12} md={2} className="p-0 d-none d-md-block">
            <Sidebar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
          </Col>
          <Col xs={12} md={10} className="p-3" style={{ backgroundColor: 'white', borderRadius: '8px' }}>
            <TaskHeader
              taskCount={taskCount}
              routeName={routeName}
              setIsModalOpen={setIsModalOpen}
              sortOptions={['Sort by', 'Date', 'Priority', 'Status', 'Title']}
              onSortChange={setSortOption}
              onSearchChange={handleSearchChange}
            />
         
          

{isModalOpen && <AddTaskModal setIsModalOpen={setIsModalOpen} />}
            <Routes>
               <Route path="/" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} sortOption={sortOption} searchTerm={searchTerm}  />} />
              <Route path="/important" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} filter="important" sortOption={sortOption} searchTerm={searchTerm}/>} />
              <Route path="/completed" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} filter="completed" sortOption={sortOption} searchTerm={searchTerm}/>} />
              <Route path="/uncompleted" element={<MainContent tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} filter="uncompleted" sortOption={sortOption} searchTerm={searchTerm}/>} />
             <Route path="/directory/:directory" element={<TaskType tasks={tasks} setTaskCount={setTaskCount} onToggleImportant={toggleImportant} onToggleStatus={toggleStatus} sortOption={sortOption} />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
