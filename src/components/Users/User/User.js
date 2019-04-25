import React from 'react';
import getUsers from './../Service/serviceUsers';
import {saveUserData} from './../Service/serviceUsers';
import './User.scss';
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Prompt} from "react-router";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            user: getUsers().find((user) => {
                return user.id === +this.props.match.params.id
            }),
            editedUser: {},
            isBlocking: false,
            isLoading: false
        };
        this.handslerChangeField = this.handslerChangeField.bind(this);
    }

    editUser = (user) => {
        this.setState({
            edit: true,
            editedUser: user
        });
    };
    saveData = (e) => {
        e.preventDefault();
        this.setState({isBlocking: false, isLoading: true});
        setTimeout(
            function() {
                saveUserData(this.state.editedUser);
                this.setState({ isLoading: false});
            }
            .bind(this),
            2000
        );
    };

    handslerChangeField(e) {
        const {name, value} = e.target;
        const { editedUser } = this.state;

        const newUser = {
            ...editedUser,
            [name]: value
        };
        this.setState({editedUser: newUser, isBlocking: true});
    }

    editUsers() {
        const { isLoading } = this.state;
        return (
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" name='name'
                                  onChange={this.handslerChangeField}
                                  value={this.state.editedUser.name}/>
                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Control type="text" name="surname"
                                  onChange={this.handslerChangeField}
                                  value={this.state.editedUser.surname}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" name="email"
                                  onChange={this.handslerChangeField}
                                  value={this.state.editedUser.email}/>
                </Form.Group>
                <Button variant="primary"
                        type="submit"
                        disabled={isLoading}
                        onClick={(e) => this.saveData(e)}>
                        {isLoading ? 'Loading…' : 'Save'}
                </Button>
            </Form>
        )
    }

    userData() {
        const {user} = this.state;
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                    </tr>
                    </tbody>
                </Table>
                <Button variant="primary"
                        type="submit"
                        className='user-btn-edit'
                        onClick={() => this.editUser(user)}
                >
                    Edit
                </Button>
            </div>
        )
    }

    render() {
        const {edit} = this.state;
        let { isBlocking } = this.state;
        return (

            <div>
                <Prompt
                    when={isBlocking}
                    message={() =>
                        `You really want to leave this page without saving data`
                    }
                />
                {edit ? this.editUsers() : this.userData()}
            </div>
        );
    }


}

export default User;