import React, { Component } from 'react';
import './App.scss';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Resources from './components/Resources/Resources';
import Users from './components/Users/Users';
import Login from './components/Logination/Logination';

import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import User from "./components/Users/User/User";
import {Switch} from "react-router";
import history from './components/History/history'

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter history={history}>
                    <Header />
                    <main>
                        <Switch>
                            <Route path='/login' component={Login}/>
                            <PrivateRoute path='/resources' component={Resources}/>
                            <PrivateRoute path='/users' component={Users}/>
                            <PrivateRoute path='/user/:id' component={User}/>
                            <PrivateRoute path='/' component={Home}/>
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>
        )
    }
}

export default Navigation;

function PrivateRoute({component: Component, ...rest}) {
    const fakeAuth = !!localStorage.getItem('isLogined');
    return (
        <Route
            {...rest}
            render={props => fakeAuth ? <Component {...props} /> : <Redirect to={{pathname: "/login"}}/>}
        />
    );
}
