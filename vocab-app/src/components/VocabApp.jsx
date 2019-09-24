import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import AdminComponent from './admin/AdminComponent';
import UserComponent from './user/UserComponent';

class VocabApp extends Component {
    render() {
        return (
            <div className="VocabApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact       component={LoginComponent} />
                            <Route path="/login"        component={LoginComponent} />
                            <Route path="/admin/:name"  component={AdminComponent} />
                            <Route path="/user/:name"   component={UserComponent} />
                        </Switch>
                    </>
                </Router>
            </div>
        );
    }
}
export default VocabApp