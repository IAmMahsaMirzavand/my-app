// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateTask } from '../redux/tasksSlice';

// const EditTaskModal = ({ show, onClose, taskToEdit }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('');
//   const [date, setDate] = useState('');
//   const [isImportant, setIsImportant] = useState(false);

  
//   useEffect(() => {
//     if (taskToEdit) {
//       setTitle(taskToEdit.title);
//       setDescription(taskToEdit.description);
//       setStatus(taskToEdit.status);
//       setDate(taskToEdit.date);
//       setIsImportant(taskToEdit.isImportant);
//     }
//   }, [taskToEdit]);

//   const handleSave = () => {
//     const updatedTask = { ...taskToEdit, title, description, status, date, isImportant };
//     dispatch(updateTask(updatedTask));  
//     onClose(); 
//   };

//   return (
//     <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Edit Task</h5>
//             <button type="button" className="btn-close" onClick={onClose}></button>
//           </div>
//           <div className="modal-body">
//             <div className="mb-3">
//               <label className="form-label">Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Status</label>
//               <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
//                 <option value="uncompleted">Uncompleted</option>
//                 <option value="completed">Completed</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Date</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Important</label>
//               <input
//                 type="checkbox"
//                 checked={isImportant}
//                 onChange={() => setIsImportant(!isImportant)}
//               />
//             </div>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" onClick={onClose}>
//               Close
//             </button>
//             <button type="button" className="btn btn-primary" onClick={handleSave}>
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditTaskModal;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../redux/tasksSlice';

const EditTaskModal = ({ show, onClose, taskToEdit }) => {
  const dispatch = useDispatch();
  const directories = useSelector(state => state.directories.directories);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [directory, setDirectory] = useState(''); 

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
      setDate(taskToEdit.date);
      setIsImportant(taskToEdit.isImportant);
      setDirectory(taskToEdit.directory || ''); 
    }
  }, [taskToEdit]);

  const handleSave = () => {
    const updatedTask = {
      ...taskToEdit,
      title,
      description,
      status,
      date,
      isImportant,
      directory,  
    };
    dispatch(updateTask(updatedTask));
    onClose();
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            
            <div className="mb-3">
              <label className="form-label">Directory</label>
              <select
                className="form-control"
                value={directory}
                onChange={(e) => setDirectory(e.target.value)} 
              >
                <option value="">Select Directory</option>
                {directories.map((dir) => (
                  <option key={dir.id} value={dir.name}>
                    {dir.name}
                  </option>
                ))}
              </select>
            </div>
           
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="uncompleted">Uncompleted</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Important</label>
              <input
                type="checkbox"
                checked={isImportant}
                onChange={() => setIsImportant(!isImportant)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
