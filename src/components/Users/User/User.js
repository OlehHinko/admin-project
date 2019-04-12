import React from 'react';
import getUsers from './../Service/serviceUsers';
import './User.scss';
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            user: getUsers().find((user) => {
                return user.id === +this.props.match.params.id;
            }),
            editedUser: {}
        };
    }

    editUser = (user) => {
        this.setState({
            edit: true,
            editedUser: user
        });
    };

    editUsers() {
        const {editedUser, user} = this.state;
        return (
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="name" value={editedUser.name}/>
                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Control type="surname" value={editedUser.surname}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" value={editedUser.email}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => this.editUser(user)}>
                    Edit
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
                <Button variant="primary" type="submit" onClick={() => this.editUser(user)}>Edit</Button>
            </div>
        )
    }

    render() {
        const {edit} = this.state;
        return (
            <div>
                {edit ? this.editUsers() : this.userData()}
            </div>
        );
    }


}

export default User;