import React, { useState } from 'react';
import { Modal, Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addDirectory } from '../redux/directoriesSlice';

const AddDirectoryModal = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const [directoryName, setDirectoryName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (directoryName.trim() !== '') {
      const newDirectory = {
        id: Date.now().toString(),
        name: directoryName,
      };
      
      dispatch(addDirectory(newDirectory));
      setIsModalOpen(false); 
      setDirectoryName('');
    }
  };
  
  return (
    <Modal show={true} onHide={() => setIsModalOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Directory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="directoryName">
            <FormLabel>Directory Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter directory name"
              value={directoryName}
              onChange={(e) => setDirectoryName(e.target.value)}
              required
            />
          </FormGroup>
          <Button variant="primary" type="submit" className="mt-3">
            Add Directory
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddDirectoryModal;





