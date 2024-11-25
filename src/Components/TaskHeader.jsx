import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import { FaSearch, FaBars, FaThLarge } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function TaskHeader({ taskCount, routeName, setIsModalOpen, sortOptions, onSortChange,onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOptionInternal, setSortOptionInternal] = useState('Sort by');
  const [sortOption, setSortOption] = useState('Sort by');



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value); 
  };

  const handleSortSelect = (option) => {
    setSortOptionInternal(option);
    setSortOption(option);
    onSortChange(option); 
}

  return (
    <>
      <Row className="align-items-center ps-lg-5">
        <Col xs={12} md={3} className="mb-3 mb-md-0">
          <InputGroup>
            <Form.Control
              placeholder="Search task"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                padding: '10px 15px',
                borderColor: '#ccc',
                border: 'none',
              }}
            />
            <InputGroup.Text
              variant="link"
              className="position-absolute end-0 top-50 translate-middle-y me-3"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0',
              }}
            >
              <FaSearch style={{ color: '#ccc', fontSize: '1.2em' }} />
            </InputGroup.Text>
          </InputGroup>
        </Col>

        <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
          <div style={{ color: '#888', fontSize: '1.1em', fontWeight: 'bold' }}>
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </Col>

        <Col xs={12} md={{ span: 3, offset: 0 }} className="text-end">
          <Button
            variant="primary"
            style={{
              backgroundColor: '#6f42c1',
              borderColor: '#6f42c1',
              padding: '10px 20px',
              fontWeight: 'bold',
              width: '100%',
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Add new task
          </Button>
        </Col>
      </Row>

      <Row className="align-items-center my-3 py-2" style={{ paddingLeft: '250px' }}>
        <Col xs={12} md={6}>
          <h5 className="mb-0">
            {routeName} Tasks ({taskCount}) 
          
      
          </h5>
        </Col>
        <Col xs={12} md={3} className="text-end d-flex justify-content-end align-items-center">
          <FaBars style={{ color: '#6f42c1', fontSize: '1.5em', marginRight: '15px' }} />
          <FaThLarge style={{ color: '#6f42c1', fontSize: '1.5em' }} />
        </Col>
      </Row>

      <Row className="align-items-center my-3 py-2" style={{ paddingLeft: '250px' }}>
        <Col xs={12} md={3} className="ms-auto">
          <DropdownButton
            variant="outline-secondary"
            title={sortOption}
            onSelect={(selectedOption) => handleSortSelect(selectedOption)}  
          >
            {sortOptions.map((option, index) => (
              <Dropdown.Item key={index} eventKey={option}>
                {option}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
    </>
  );
}

export default TaskHeader;




