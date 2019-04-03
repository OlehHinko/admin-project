import React from 'react';
import './Logination.scss';
import {Form, Button} from 'react-bootstrap';

const Logination = () => {

    let setLocalStorage = () => {
        localStorage.setItem('1','true');
    };

  return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={setLocalStorage}>
          Submit
        </Button>
      </Form>
  );
};

export default Logination;
