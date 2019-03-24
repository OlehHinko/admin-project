import React from 'react';
import './Resources.scss';
import {ListGroup} from 'react-bootstrap';
const Resources = (props) => {
  return (
    <div className="resources">
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item as="li" >
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Porta ac consectetur ac
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Resources;
