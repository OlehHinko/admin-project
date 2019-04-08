import React from 'react';
import getUsers from './../Service/serviceUsers';


class User extends React.Component {
    render() {
        const users = getUsers();
        const UserId = this.props.match.params.id;
        let user = users.find((user) => {
            return user.id == UserId;
        });
        let editUser = () => {
            this.state.edit = true;
            console.log(this.state.edit);
        };
        return (
            <div>
                <p>{user.id} {user.name}</p>
                <button onClick={editUser}>Edit</button>
                {console.log(this.state.edit)}
            </div>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }

}

export default User;
