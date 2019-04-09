import React from 'react';
import './Header.scss';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    const removeLocalStorage = () =>{
        localStorage.removeItem('isLogined');
    };
    return (
        <header className="header">
            <Nav>
                <Nav.Item>
                    <Link to='/'>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/resources">Resources</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/users'>Users</Link>
                </Nav.Item>
                <Nav.Item className="log-out">
                    <button  onClick={removeLocalStorage}>
                        Log out
                    </button>
                </Nav.Item>
            </Nav>
        </header>

    );
};

export default Header;
