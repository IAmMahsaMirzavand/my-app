import React, { useState } from 'react';
import { Modal, Button, Form, FormControl, FormGroup, FormLabel, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addDirectory } from '../redux/directoriesSlice';

const AddDirectoryModal = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const directories = useSelector((state) => state.directories.directories); 
  const [directoryName, setDirectoryName] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); 

   
    const existingDirectory = directories.find((dir) => dir.name.toLowerCase() === directoryName.trim().toLowerCase());

    if (existingDirectory) {
    
      setError('A directory with this name already exists.');
    } else {
      
      const newDirectory = {
        id: Date.now().toString(),
        name: directoryName.trim(),
      };

      dispatch(addDirectory(newDirectory));
      setIsModalOpen(false);  
      setDirectoryName('');   
      setError('');           
    }
  };

  return (
    <Modal show={true} onHide={() => setIsModalOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Directory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}  
          
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
