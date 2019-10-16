import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ConnectApi from '../../api/ConnectApi';


class AdminEditUserComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        let {id, firstname, lastname, birthday, address, mobile, email, password} = this.props.location.state.detail
        this.state = {
            id: id,
            adminName: this.props.location.state.adminName,
            firstname: firstname,
            lastname : lastname,
            birthday : birthday,
            address  : address,
            mobile   : mobile,
            email    : email,
            password : password,
        }

        this.handleChange                   = this.handleChange.bind(this)
        this.handleSubmitEditUserByAdmin    = this.handleSubmitEditUserByAdmin.bind(this)

    }

    handleSubmitEditUserByAdmin = (event) => {
        event.preventDefault()
        if(this.state.firstname === "" || this.state.lastname === "" || 
            this.state.birthday === "" || this.state.address  === "" ||
            this.state.mobile   === "" || this.state.email    === "" ||
            this.state.password === "") {
            alert("Please fill input is required.")
            
        } else {
            ConnectApi.updateUser(this.state.id, this.state)
            .then(res => { this.props.history.push(`/adminAddUser/${this.state.adminName}`) })
            .catch(err => { console.log(err) })
        }
       
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
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
            name: this.props.location.state.adminName,
            type: 'Admin',
            isAdmin: true
        }

        return (
            <>
            <HeaderComponent {...data}/>
                <div className="ui container">
                    <div className="ui one column doubling stackable grid center aligned container">
                        <div className="column mgTop10Px width50Pc">
                            <div className="ui attached message">
                                <div className="ui center aligned container">
                                    <h4>Edit user</h4>
                                </div>
                            </div>

                            <form onSubmit={this.handleSubmitEditUserByAdmin} className="ui form attached fluid segment">
                                <div className="two fields">
                                    <div className="field">
                                        <input type="text" name="firstname" value={this.state.firstname} 
                                        onChange={this.handleChange} placeholder="First Name" />

                                    </div>
                                    <div className="field">
                                        <input type="text" name="lastname" value={this.state.lastname} 
                                        onChange={this.handleChange} placeholder="Last Name" />
                                        
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <input type="text" name="birthday" value={this.state.birthday} 
                                        onChange={this.handleChange} placeholder="Birthday ex.01012540" />
                                    </div>
                                    <div className="field ">
                                        <input type="text" name="mobile" value={this.state.mobile} 
                                        onChange={this.handleChange} placeholder="Mobile phone" />
                                        
                                    </div>
                                </div>
                                <div className="two fields">
                                   
                                    <div className="field">
                                        <input type="password" name="password" value={this.state.password} 
                                        onChange={this.handleChange} placeholder="Password" />
                                        
                                    </div>
                                    <div className="field">
                                        <input type="email" name="email" value={this.state.email} 
                                        onChange={this.handleChange} placeholder="E-mail" />
                                        
                                    </div>
                                </div>
                                <div className="one fields">
                                    <div className="field width100Pc">
                                        <textarea rows="3" type="text" name="address" value={this.state.address} 
                                        onChange={this.handleChange} placeholder="Address" />
                                    </div>
                                </div>
                                <div className="ui center aligned container">
                                    <button className="ui basic button" type="submit">Update</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            <FooterComponent />
            </>
        );
    }
}

export default AdminEditUserComponent
