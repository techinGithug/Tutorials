import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ConnectApi from '../../api/ConnectApi';

class AdminAddUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminName: this.props.match.params.name,
            users: [],
            userSelected: [],
            visibleDetailUser: false,
            isCloseVisibleDetailUser: false,
            isDeleteUser: false
        }

        this.handleWatchDetailUser  = this.handleWatchDetailUser.bind(this)
        this.handleEditUser         = this.handleEditUser.bind(this)
        this.handleCloseDetailUser  = this.handleCloseDetailUser.bind(this)
        this.handleDeleteUser       = this.handleDeleteUser.bind(this)
        this.handleBlockUser        = this.handleBlockUser.bind(this)
        this.handleUnBlockUser      = this.handleUnBlockUser.bind(this)
    }

    componentDidMount = () => {
        this.refreshTodo()
    }

    refreshTodo = () => {
        ConnectApi.findAllUser()
        .then(res => {
            this.setState({users: res.data})
        })
    }

    handleWatchDetailUser = (val) => {
        this.setState({
            userSelected: val,
            visibleDetailUser: true
        })
    }

    handleEditUser = (user) => {
        this.props.history.push({
            pathname: '/adminEditUser',
            state: { detail: user, adminName: this.props.match.params.name }
        })
    }

    handleDeleteUser = (id) => {
        if(window.confirm("Delete this user ?")) {
            ConnectApi.deleteUser(id)
            .then(res => {
                this.refreshTodo()
            })
            
        }
    }

    handleCloseDetailUser = () => {
        this.setState({visibleDetailUser: false})
    }

    handleBlockUser = (id) => {
        ConnectApi.blockUserById(id)
        .then(res => {
            this.refreshTodo()
        })
        .catch(err => {
            alert(err)
        })
    }

    handleUnBlockUser = (id) => {
        ConnectApi.unblockUserById(id)
        .then(res => {
            this.refreshTodo()
        })
        .catch(err => {
            alert(err)
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
                    <div className="mgTop20Px">
                        <h3 className="ui center aligned">Users</h3>
                    </div>
                    {/* <div className="cursorPointer"><i className="large plus square icon"></i></div> */}
                    <div className="mgTop10Px width50Pc">
                        <div className={this.state.visibleDetailUser ? 'fadeIn':'fadeOut'}>
                            <div className="ui message ui center aligned container">
                                <i className="close icon" onClick={() => this.handleCloseDetailUser()}></i>
                                <div className="ui center aligned mgBottom10Px">
                                    <h5>Details more [{this.state.userSelected.firstname}]</h5> 
                                </div>
                                <div className="ui image label">
                                    <i className="list ol icon mgRight10Px"></i>
                                    {this.state.userSelected.id}
                                </div>
                                <div className="ui image label">
                                    <i className="address book icon"></i>
                                    {this.state.userSelected.address}
                                </div>
                                <div className="ui image label">
                                    <i className="birthday cake icon"></i>
                                    {this.state.userSelected.birthday}
                                </div>
                                <div className="ui image label">
                                    <i className="registered icon"></i>
                                    {this.state.userSelected.date_r}
                                </div>
                            </div>
                        </div>  
                    </div>

                    <table className="ui celled table">
                        <thead className="ui center aligned">
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th width="5%">Block?</th>
                                <th width="12%">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key={user.id}>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td className="ui center aligned">{user.mobile}</td>
                                        <td>{user.email}</td>
                                        <td className="ui center aligned">
                                        {
                                            user.isBlock === 'f' ? 
                                            (<i className="circular times circle icon link" onClick={() => this.handleBlockUser(user.id)}></i>)
                                            :
                                            (<i className="circular check circle circle icon link" onClick={() => this.handleUnBlockUser(user.id)}></i>)
                                        }
                                        </td>
                                        <td className="ui center aligned">
                                            <i className="circular eye icon cursorPointer link" onClick={() => this.handleWatchDetailUser(user)}></i>
                                            {' '}
                                            <i className="circular edit icon cursorPointer link" onClick={() => this.handleEditUser(user)}></i>
                                            {' '}
                                            <i className="circular trash icon cursorPointer link" onClick={() => this.handleDeleteUser(user.id)}></i>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <FooterComponent />
            </>
        );
    }
}

export default AdminAddUserComponent