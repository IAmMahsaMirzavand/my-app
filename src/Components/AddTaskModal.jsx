import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form, FormControl, FormGroup, FormLabel, FormCheck } from 'react-bootstrap';  
import { useForm } from 'react-hook-form';
import { addTask } from '../redux/tasksSlice';

const AddTaskModal = ({ setIsModalOpen }) => {
  const directories = useSelector(state => state.directories.directories); 
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title,
      date: data.date,
      description: data.description,
      isImportant: !!data.important,
      status: data.completed ? 'completed' : 'uncompleted',
      directory: data.directoryId,  
    };
    dispatch(addTask(newTask)); 
    setIsModalOpen(false); 
  };

  return (
    <Modal show={true} onHide={() => setIsModalOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup controlId="title">
            <FormLabel>Task Title</FormLabel>
            <FormControl {...register('title', { required: 'Title is required' })} />
            {errors.title && <span>{errors.title.message}</span>}
          </FormGroup>

          <FormGroup controlId="date">
            <FormLabel>Date</FormLabel>
            <FormControl {...register('date', { required: 'Date is required' })} type="date" />
          </FormGroup>

          <FormGroup controlId="description">
            <FormLabel>Description</FormLabel>
            <FormControl {...register('description', { required: 'Description is required' })} />
          </FormGroup>

          <FormGroup controlId="directoryId">
            <FormLabel>Select Directory</FormLabel>
            <FormControl as="select" {...register('directoryId', { required: 'Please select a directory' })}>
              <option value="">Select...</option>
              {directories.map((dir) => (
                <option key={dir.id} value={dir.name}>{dir.name}</option>
              ))}
            </FormControl>
            {errors.directoryId && <span>{errors.directoryId.message}</span>}
          </FormGroup>

         
          <FormGroup controlId="important">
            <FormCheck 
              type="checkbox" 
              label="Mark as Important" 
              {...register('important')} 
            />
          </FormGroup>

          
          <FormGroup controlId="completed">
            <FormCheck 
              type="checkbox" 
              label="Mark as Completed" 
              {...register('completed')} 
            />
          </FormGroup>

          <Button variant="primary" type="submit">Add Task</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;



