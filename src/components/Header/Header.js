import React from 'react';
import './Header.scss';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Redirect} from "react-router";

const Header = () => {
    let removeLocalStorage = () =>{
        localStorage.clear();
        localStorage.setItem('0', 'false');
    };
    return (
        <header className="header">
            <Nav>
                <Nav.Item>
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/resources">Resources</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item className="log-out">
                    <Nav.Link  eventKey="disabled" onClick={removeLocalStorage}>
                        Log out
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </header>

    );
};

export default Header;
