import React from 'react';
import './Signin.scss';
import { Form, Button } from 'react-bootstrap';
import is from 'is_js';
import { withRouter } from "react-router";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        };
        this.handslerChangeField = this.handslerChangeField.bind(this);
    }

    handslerChangeField(e) {
        const { name, value } = e.target;
        this.setState({ [ name ]: value });
    }

    onSignIn(e) {
        e.preventDefault();
        if (!this.isFormsValid()) {
            return
        }
        this.props.history.push('/');
        localStorage.setItem('isLogined', 'true');
    };

    isFormsValid() {
        return this.isEmailValid(this.state.email) && this.isPasswordValid(this.state.password);
    }

    isEmailValid(email) {
        let emailError = '';
        if (email === '') {
            emailError = 'You have not entered an email';
            this.setState({ emailError });
            return false;
        }
        if (!is.email(email)) {
            emailError = 'You have entered an invalid email';
            this.setState({ emailError });
            return false;
        }
        this.setState({ emailError: '' });
        return true;
    }

    isPasswordValid(password) {
        let passwordError = '';
        if (password === '') {
            passwordError = 'Password can not be empty';
            this.setState({ passwordError });
            return false;
        }
        if (password.length < 6) {
            passwordError = 'Password length must be more than six characters long';
            this.setState({  passwordError });
            return false;
        }
        this.setState({ passwordError: '' });
        return true;
    }

    render() {
        const {emailError} = this.state;
        const {passwordError} = this.state;
        const classNames = require('classnames');
        return (
            <Form onSubmit={(e) => this.onSignIn(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={classNames({'error' : emailError})}
                                  onChange={this.handslerChangeField}
                                  value={this.state.email}
                                  placeholder="Enter email"
                                  name='email'/>
                    {emailError && <div className='error-massage'>{emailError}</div>}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className={classNames({'error' : passwordError})}
                                  onChange={this.handslerChangeField}
                                  value={this.state.password}
                                  placeholder="Password"
                                  name='password'/>
                    {passwordError && <div className='error-massage'>{passwordError}</div>}
                </Form.Group>
                <Button variant="primary" className='btn-submit' type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default withRouter(Signin);