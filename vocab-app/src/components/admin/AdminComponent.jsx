import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ConnectApi from '../../api/ConnectApi';

class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        this.refreshTodo()
    }

    refreshTodo = () => {
        ConnectApi.findAllUser()
        .then(res => {
            // console.log(res);
            this.setState({users: res.data})
        })
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
                    {/* <div className="mgTop20Px">
                        <h3 className="ui center aligned">Users</h3>
                    </div>
                   
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Birthday</th>
                                <th>Address</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Registed</th>
                                <th>Status</th>
                                <th>Block</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key={user.id}>
                                        <td>{user.username_r}</td>
                                        <td>{user.password_r}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.birthday}</td>
                                        <td>{user.address}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.email}</td>
                                        <td>{user.date_r}</td>
                                        <td>{user.status}</td>
                                        <td>{user.isBlock}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table> */}
                </div>
                <FooterComponent />
            </>
        );
    }
}

export default AdminComponent