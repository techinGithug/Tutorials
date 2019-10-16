import React, { Component } from 'react';
import HeaderComponentFirst from './HeaderComponentFirst';
import FooterComponent from './FooterComponent';
import ConnectApi from '../api/ConnectApi.js';

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname : '',
            birthday : '',
            address  : '',
            mobile   : '',
            email    : '',
            password: '',
            message: null
        }

        this.handleSubmitRegist = this.handleSubmitRegist.bind(this)
        this.handleClearValueRegist = this.handleClearValueRegist.bind(this)
        this.visibleMessage     = this.visibleMessage.bind(this)

    }

    handleSubmitRegist = (event) => {
        event.preventDefault()
        if(this.state.firstname === "" || this.state.lastname === "" || this.state.birthday === "" || this.state.address === "" 
            || this.state.mobile === "" || this.state.email === "" || this.state.password === ""
        ) {
            alert("Please fill all data...")

        } else {
            let {firstname, lastname, birthday, address, mobile, email, password} = this.state
            let data = {
                firstname   : firstname,
                lastname    : lastname,
                birthday    : birthday, 
                address     : address,
                mobile      : mobile,
                email       : email,
                password    : password,
                date_r      : new Date().toLocaleDateString(),
                status      : 't',
                isBlock     : 'f'
            }
            ConnectApi.postUser(data)
            .then(res => { 
                this.setState({message: 'Registed data'}) 
                setTimeout( () => this.visibleMessage(), 5000 );
            })
            .catch(err => { 
                this.setState({message: `Errors, ${err}!`})
            })
            setTimeout( () => this.handleClearValueRegist(), 3000 );
        }
    }

    visibleMessage = () => {
        this.setState({message: null})
    }

    handleClearValueRegist = () => {
        this.setState({
            firstname: '',
            lastname : '',
            birthday : '',
            address  : '',
            mobile   : '',
            email    : '',
            password : ''
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <>
            <HeaderComponentFirst />
                <div className="ui container">
                    <div className="ui one column doubling stackable grid center aligned container">
                        <div className="column width50Pc" style={{marginTop: '5em'}}>
                            {
                                this.state.message && 
                                <div className="ui green message">
                                    <p>{this.state.message}</p>
                                </div>
                            }

                            <div className="ui attached message">
                                <div className="ui center aligned container">
                                    <h4>Register</h4>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmitRegist} className="ui form attached fluid segment">
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
                                        <input type="email" name="email" value={this.state.email} 
                                        onChange={this.handleChange} placeholder="E-mail" /> 
                                    </div>
                                    <div className="field">
                                        <input type="password" name="password" value={this.state.password} 
                                        onChange={this.handleChange} placeholder="Password" />                                  
                                    </div>
                                </div>
                                <div className="one fields">
                                    <div className="field width100Pc">
                                        <textarea rows="3" type="text" name="address" value={this.state.address} 
                                        onChange={this.handleChange} placeholder="Address" />
                                    </div>
                                </div>
                                <div className="ui center aligned container">
                                    <button className="ui basic button" type="submit">Sign up</button>
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

export default RegisterComponent