import React, { useState } from 'react'; 
import { FaCalendarAlt, FaStar, FaTrash, FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setTaskToEdit } from '../redux/tasksSlice';
import EditTaskModal from './EditModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { useNavigate } from 'react-router-dom';
const TaskCard = ({ title, description, date, status, isImportant, taskId, onToggleImportant, onToggleStatus, directory, onDeleteTask }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setTaskToEdit({ title, description, date, status, isImportant, id: taskId }));
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null); 
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  const handleDelete = () => {
    onDeleteTask(taskToDelete); 
    navigate('/'); 
    setShowModal(false);
  };





  return (
    <>
      <div className="card p-3 mb-4" style={{ width: '18rem', borderRadius: '10px', position: 'relative', backgroundColor: status === 'completed' ? '#e0f7fa' : '#f3e5f5' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#ff7272', color: '#fff', padding: '5px 10px', fontSize: '0.8rem', borderBottomRightRadius: '10px' }}>
          {directory}
        </div>

        <div className="card-body">
          <h5 className="card-title" style={{ color: status === 'completed' ? 'green' : 'purple' }}>{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex align-items-center mb-2">
            <FaCalendarAlt className="me-2 text-muted" />
            <small>{date}</small>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between align-items-center">
          <span className={`badge ${status === 'completed' ? 'bg-success' : 'bg-warning'}`} onClick={onToggleStatus}>
            {status}
          </span>

          <div className="d-flex align-items-center">
            <button onClick={onToggleImportant} className="btn btn-link text-decoration-none p-0 me-2">
              <FaStar className={isImportant ? 'text-warning' : 'text-muted'} />
            </button>
            <button onClick={handleEdit} className="btn btn-link text-decoration-none p-0 me-2">
              <FaEdit className="text-info" />
            </button>
            <button onClick={() => { setTaskToDelete(taskId); handleOpenModal(); }} className="btn btn-link text-decoration-none p-0">
              <FaTrash className="text-danger" />
            </button>
          </div>
        </div>
      </div>

     
      <EditTaskModal show={showEditModal} onClose={handleCloseModal} taskToEdit={{ title, description, date, status, isImportant, id: taskId }} />


             <DeleteConfirmationModal
        show={showModal}
        onClose={handleCloseModal}
        onDelete={handleDelete}
        directoryName={title} 
      />
    </>
  );
};
export default TaskCard;



