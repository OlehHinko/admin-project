import React from 'react';
import './Users.scss';
import {Link} from "react-router-dom";
import getUsers from './Service/serviceUsers';
import ListGroup from "react-bootstrap/ListGroup";

class Users extends React.Component {
    render () {
        const users = getUsers();
        return (
            <div className="users">
                <h2>Users</h2>
                <ListGroup as="ul" >
                    {users && users.map((user, key) => (
                            <ListGroup.Item as="li" key={key}>
                                <Link to={`user/${user.id}`}>{user.name}</Link>
                            </ListGroup.Item>
                        )
                    )}
                </ListGroup>
            </div>
        );
    }
}

export default Users;
