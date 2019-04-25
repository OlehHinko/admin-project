import React from 'react';
import './Header.scss';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logOut: true
        };
    }

    removeLocalStorage() {
        this.props.history.push('/login');
        localStorage.removeItem('isLogined');
        this.setState({
            logOut: false
        })
    }


    render() {

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
                    <Nav.Item className={this.state.logOut ? 'log-out showBtn' : 'log-out hideBtn'  }>
                        <button
                            onClick={() => this.removeLocalStorage()}>
                            Log out
                        </button>
                    </Nav.Item>
                </Nav>
            </header>

        );
    }
}

export default withRouter(Header);