import React from 'react';
import getUsers from './../Service/serviceUsers';

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

    asdasd1() {
        const {editedUser} = this.state;
        return <div>Edit</div>
    }

    asdasd2() {
        const {user} = this.state;
        return <p>{user.id} {user.name}</p>
    }

    render() {
        /*const users = getUsers();
        const UserId = +this.props.match.params.id;
        let user = users.find((user) => {
            return user.id === UserId;
        });*/

        const {user, edit} = this.state;
        return (
            <div>
                {edit ? this.asdasd1() : this.asdasd2()}
                <div>
                    <button onClick={() => this.editUser(user)}>Edit</button>
                </div>
            </div>
        );
    }


}

export default User;
