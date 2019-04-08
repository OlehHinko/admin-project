import React from 'react';
import './Users.scss';
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import getUsers from './Service/serviceUsers';


class Users extends React.Component {
    render () {
        const users = getUsers();
        return (
            <div className="users">
                <h2>Users</h2>
                <ul>
                    {users && users.map((user, key) => {
                        return (
                            <li key={key}>
                                <Link to={`user/${user.id}`}>{user.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Users;
