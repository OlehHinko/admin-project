import React from 'react';
import './Resources.scss';
import {ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Resources = (props) => {
    return (
        <div className="resources">
            <ListGroup as="ul">
                <ListGroup.Item as="li">
                    <a href='https://github.com/mui-org/material-ui' target="_blank">Material UI</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <a href='https://github.com/mobxjs/mobx' target="_blank">MobX</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <a href='https://github.com/reduxjs/react-redux' target="_blank">Redux</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <a href='https://github.com/bvaughn/react-virtualized' target="_blank">React Virtualized</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <a href='https://github.com/erikras/redux-form' target="_blank">Redux Form</a>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Resources;
