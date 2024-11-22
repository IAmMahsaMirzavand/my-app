import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AddTaskModal from './AddTaskModal';

import DeleteConfirmationModal from './DeleteConfirmationModal';
import { addDirectory, deleteDirectory } from '../redux/directoriesSlice';
import { deleteTasksByDirectory } from '../redux/tasksSlice';
import { FaBars, FaTasks, FaStar, FaCheckCircle, FaTimesCircle, FaFolderPlus, FaEdit, FaTrash } from 'react-icons/fa';
import AddDirectoryModal from './AddDirectoryModal';

const Sidebar = () => {
  const tasks = useSelector((state) => state.tasks.tasks); 
  const directories = useSelector((state) => state.directories.directories); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalType, setModalType] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false); 
  const [directoryToDelete, setDirectoryToDelete] = useState(null); 

 
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);  
  };
  
  const addNewDirectory = (directoryName) => {
    const newDirectory = { id: Date.now().toString(), name: directoryName };
    dispatch(addDirectory(newDirectory)); 
  };

  
  const handleDeleteDirectory = () => {
    if (directoryToDelete) {
      const { id } = directoryToDelete;
  
      
      dispatch(deleteDirectory(id));
  
      
      dispatch(deleteTasksByDirectory(id));
  
      
      setDirectoryToDelete(null);
      setDeleteModal(false);
  
      
      navigate('/');
    }
  };

  return (
    <>
    
      <Navbar expand="lg">
        <Button variant="light" onClick={() => setShow(true)} className="me-2">
          <FaBars />
        </Button>
        <Navbar.Brand>TO-DO LIST</Navbar.Brand>
      </Navbar>

     
      <Offcanvas show={show} onHide={() => setShow(false)} responsive="xl">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TO-DO LIST</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p-3">
            
            <Button variant="primary" onClick={() => openModal('task')} className="w-100 mb-4">
              <FaTasks className="me-2" /> Add New Task
            </Button>

            <Nav className="flex-column">
              <Nav.Item className="mb-2">
                <Link to="/" className="nav-link">
                  <FaTasks className="me-2" />
                  All Tasks ({tasks.length})
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Link to="/important" className="nav-link">
                  <FaStar className="me-2" style={{ color: '#ff6347' }} />
                  Important Tasks
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Link to="/completed" className="nav-link">
                  <FaCheckCircle className="me-2" style={{ color: '#28a745' }} />
                  Completed Tasks
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Link to="/uncompleted" className="nav-link">
                  <FaTimesCircle className="me-2" style={{ color: '#ffc107' }} />
                  Uncompleted Tasks
                </Link>
              </Nav.Item>
            </Nav>

            <div className="mt-5">
  <h6>Directories</h6>
  <Nav className="flex-column">
                {directories.map((directory) => {
                 
                  const taskCount = tasks.filter((task) => task.directory === directory.name).length;
                  return (
                    <Nav.Item key={directory.id} className="mb-2 directory-item">
                      <Link to={`/directory/${directory.name}`} className="nav-link d-flex justify-content-between align-items-center">
                        {directory.name}
                        <span>({taskCount})</span> 
                        {directory.name !== 'Main' && (
                          <FaTrash
                            className="text-danger"
                            onClick={() => {
                              setDirectoryToDelete(directory);
                              setDeleteModal(true);
                            }}
                          />
                        )}
                      </Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
</div>


            <Nav.Item className="mt-3">
              <Link onClick={() => openModal('directory')} className="nav-link">
                <FaFolderPlus className="me-2" /> + New
              </Link>
            </Nav.Item>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      
      {isModalOpen && modalType === 'task' && (
        <AddTaskModal setIsModalOpen={setIsModalOpen} />
      )}

      {isModalOpen && modalType === 'directory' && (
        <AddDirectoryModal setIsModalOpen={setIsModalOpen} addNewDirectory={addNewDirectory} />
      )}

      {deleteModal && directoryToDelete && (
        <DeleteConfirmationModal
          show={deleteModal}
          onClose={() => setDeleteModal(false)}
          onDelete={handleDeleteDirectory}
          directoryName={directoryToDelete.name}
        />
      )}
    </>
  );
};

export default Sidebar;




