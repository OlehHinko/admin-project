import React from 'react';
import './Users.scss';
import User from'./User/User';
import {Card,Button} from 'react-bootstrap';

const Users = (props) => {

  return (
    <div className="users">
        <User />
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/src/images/user/images.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the cards content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    </div>
  );
}

export default Users;
