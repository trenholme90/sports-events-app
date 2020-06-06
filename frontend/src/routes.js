import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/dashboard" exact component={Dashboard}></Route>
                <Route path="/register" exact component={Register}></Route>
                <Route path="/events" exact component={Events}></Route>
            </Switch>
        </BrowserRouter>
    )
}