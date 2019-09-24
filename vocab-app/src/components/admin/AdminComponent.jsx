import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const data = {
            home: 'Home',
            users: 'Users',
            admins: 'Admins',
            result: 'Result',
            api: 'Api',
            test: 'Test',
            setting: 'Setting',
            name: this.props.match.params.name,
            type: 'Admin',
            isAdmin: true
        }
        return (
            <>
                <HeaderComponent {...data} />
                <div className="ui container">
                    
                </div>
                <FooterComponent />
            </>
        );
    }
}

export default AdminComponent