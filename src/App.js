import React from 'react';
import './App.scss';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Resources from './components/Resources/Resources';
import Users from './components/Users/Users';
import Logination from './components/Logination/Logination';
import User from "./components/Users/User/User";

import {ButtonToolbar, Button, Images, Nav} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';



class Navigation extends  React.Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Header />
            <main>
                <Route exact path='/' component={Home}/>
                <Route path='/resources' component={Resources}/>
                <Route path='/users' component={Users}/>
                <Route path='/user/:topicId' component={User}/>
                <Route path='/login' component={Logination}/>
            </main>
          </BrowserRouter>
        </div>
    )
  }
}

export default Navigation;
