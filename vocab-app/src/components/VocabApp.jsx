import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import AdminComponent from './admin/AdminComponent';
import UserComponent from './user/UserComponent';
import AdminAddUserComponent from './admin/AdminAddUserComponent';
import AdminEditUserComponent from './admin/AdminEditUserComponent';
import UserAddVocabComponent from './user/UserAddVocabCompenent';
import UserTestComponent from './user/UserTestComponent';
import UserResultComponent from './user/UserResultComponent';
import UserEditVocabById from './user/UserEditVocabById';

class VocabApp extends Component {
    render() {
        return (
            <div className="VocabApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact               component={LoginComponent} />
                            <Route path="/login"                component={LoginComponent} />
                            <Route path="/register"             component={RegisterComponent} />
                            <Route path="/admin/:name"          component={AdminComponent} />
                            <Route path="/adminAddUser/:name"   component={AdminAddUserComponent} />
                            <Route path="/adminEditUser"        component={AdminEditUserComponent} />
                            <Route path="/userLogin"            component={UserComponent} />
                            <Route path="/userAddVocab"         component={UserAddVocabComponent} />
                            <Route path="/userEidtVocabById"    component={UserEditVocabById} />
                            <Route path="/userTest"             component={UserTestComponent} />
                            <Route path="/userResult"           component={UserResultComponent} />
                        </Switch>
                    </>
                </Router>
            </div>
        );
    }
}
export default VocabApp