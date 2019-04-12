import React from 'react';
import './Logination.scss';
import {Form, Button} from 'react-bootstrap';
import { Redirect} from 'react-router-dom';

class Login extends React.Component {
    setLocalStorage = () => {
        localStorage.setItem('isLogined', 'true');
    };

    render() {
        if (localStorage.getItem('isLogined')) {
            return <Redirect to={{pathname: "/"}}/>
        }
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.setLocalStorage}>
                    Submit
                </Button>
            </Form>
        );
    }
};

export default Login;
