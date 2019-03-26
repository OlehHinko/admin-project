import React from 'react';
import './Header.scss';
import {Nav} from 'react-bootstrap';
import  {Link} from 'react-router-dom';
const Header = (props) => {
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
          <Nav.Item>
            <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
              Log out
              </Nav.Link>
          </Nav.Item>
        </Nav>
    </header>

  );
};

export default Header;
