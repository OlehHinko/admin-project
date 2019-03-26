import React from 'react';
import getUsers from '../Service/serviceUsers';

const User = ({match}) => {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );

};
export default User;
