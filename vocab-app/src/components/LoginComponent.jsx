import React, { Component } from 'react';
import ConnectApi from '../api/ConnectApi.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Login //
            username: '',
            password: '',

            // Register //
            firstname: '',
            lastname : '',
            birthday : '',
            address  : '',
            mobile   : '',
            email    : '',
            username_r: '',
            password_r: '' 
        }

        // Login //
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

        // Register //
        this.handleSubmitRegist = this.handleSubmitRegist.bind(this)
        this.handleClearValueRegist = this.handleClearValueRegist.bind(this)

    }

    // Login //
    handleSubmit = (event) => {
        if(this.state.username === 'admin' && this.state.password === 'admin') {
            this.props.history.push(`/admin/${this.state.username}`)
            console.log("Admin login successful")

        } else if(this.state.username === 'user' && this.state.password === 'user') {
            this.props.history.push(`/user/${this.state.username}`)
            console.log("User login successful")
            
        } else if(this.state.username === "" || this.state.password === "") {
            alert("Username or Password is required.")
            
        } else {
            alert("Username or Password is incorect.")
        }
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    // Register //
    handleSubmitRegist = (event) => {
        event.preventDefault()
        if(this.state.firstname === "" || this.state.lastname === "" || this.state.birthday === "" || this.state.address === "" 
            || this.state.mobile === "" || this.state.email === "" || this.username_r === "" || this.state.password_r === ""
        ) {
            alert("Please fill all data...")

        } else {
            let {firstname, lastname, birthday, address, mobile, email, username_r, password_r} = this.state
            let data = {
                firstname: firstname,
                lastname: lastname,
                birthday: birthday, 
                address: address,
                mobile: mobile,
                email: email,
                username_r: username_r,
                password_r: password_r
            }
            // console.log(data)
            ConnectApi.registUser(data)
                .then(res => { console.log(res)})
                .catch(err => { console.log(err) })
            setTimeout( () => this.handleClearValueRegist(), 3000 );
        }
    }

    handleClearValueRegist = () => {
        this.setState({
            firstname: '',
            lastname : '',
            birthday : '',
            address  : '',
            mobile   : '',
            email    : '',
            username_r: '',
            password_r: ''
        })
        // event.preventDefault()
    }

    render() {

        return (
            <>
            <div className="ui container">
                <div className="ui two column doubling stackable grid center aligned  container">
                    <div className="column width25Pc" style={{marginTop: '10em'}}>
                        <h1>VocabApp</h1>
                        <div className="ui attached message">
                            <div className="ui center aligned container">
                                <h4>Login</h4>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit} className="ui form attached fluid segment">
                            <div className="field ui left icon input width100Pc">
                                <input  type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                                <i className="user icon"></i>
                            </div>
                            <div className="field ui left icon input width100Pc">
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                <i className="lock icon"></i>
                            </div>
                            <div className="ui center aligned container">
                                <button className="ui basic button" type="submit">Login</button>
                                {/* <button className="ui basic button" type="reset" onClick={this.handleClearValue}>Clear</button> */}
                            </div>
                        </form>
                       
                    </div>
                    <div className="column" style={{marginTop: '9em'}}>
                        <div className="ui attached message">
                            <div className="ui center aligned container">
                                <h4>Register</h4>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmitRegist} className="ui form attached fluid segment">
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name" />
                                    
                                </div>
                                <div className="field">
                                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name" />
                                    
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder="Birthday ex.19900101" />
                                </div>
                                <div className="field">
                                    <input type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address" />
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field ">
                                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} placeholder="Mobile phone" />
                                    
                                </div>
                                <div className="field">
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="E-mail" />
                                    
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field ">
                                    <input type="text" name="username_r" value={this.state.username_r} onChange={this.handleChange} placeholder="Username" />
                                    
                                </div>
                                <div className="field">
                                    <input type="password" name="password_r" value={this.state.password_r} onChange={this.handleChange} placeholder="Password" />
                                    
                                </div>
                            </div>
                            <div className="ui center aligned container">
                                <button className="ui basic button" type="submit">Sign up</button>
                            </div>
                        </form>
                         {/* <div className="ui left aligned container content mgTop10Px ">VocabApp © Copyright 2019. All Rights Reserved.</div> */}
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default LoginComponent;