// import { useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// import { FaTrash } from "react-icons/fa";



// const ModalDelete = ({ title, onDelete }) => {
//     const [showModal, setShowModal] = useState(false);
  
//     return (
//       <>
//         <button onClick={() => setShowModal(true)} className="btn btn-link text-decoration-none p-0">
//           <FaTrash className="text-danger" />
//         </button>
  
//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Are you sure?</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Do you really want to delete this task?</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//             <Button variant="danger" onClick={() => { onDelete(); setShowModal(false); }}>Delete</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   };
  

//   export default ModalDelete;

// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// const ModalDelete = ({ showModal, onDelete, onClose, entityType, entityId }) => {
//   const handleDelete = () => {
//     if (onDelete) {
//       onDelete(entityId);
//     }
//     onClose(); 
//   };

//   return (
//     <Modal show={showModal} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Are you sure you want to delete this {entityType}?</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         This action cannot be undone.
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>Cancel</Button>
//         <Button variant="danger" onClick={handleDelete}>Delete</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default ModalDelete;


import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDelete = ({ entityType, entityId, onDelete, onClose }) => {
  return (
    <Modal show={!!entityId} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this {entityType} (ID: {entityId})?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
        

      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;


