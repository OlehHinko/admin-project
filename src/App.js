import React from 'react';
import './App.scss';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Resources from './components/Resources/Resources';
import Users from './components/Users/Users';
import Login from './components/Logination/Logination';

import {ButtonToolbar, Button, Images, Nav} from 'react-bootstrap';
import {BrowserRouter, Route, BrowserRouter as Router, Redirect, withRouter} from 'react-router-dom';
import User from "./components/Users/User/User";
import {Switch} from "react-router";



class Navigation extends  React.Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <PrivateRoute path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/resources' component={Resources}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/user/:id' component={User}/>
                </Switch>
            </main>
          </BrowserRouter>
        </div>
    )
  }
}

export default Navigation;
