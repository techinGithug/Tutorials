import React, { Component } from 'react';
import ConnectApi from '../api/ConnectApi.js';
import HeaderComponentFirst from './HeaderComponentFirst';
import FooterComponent from './FooterComponent'; 

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            message: null
        }

        this.handleLogin        = this.handleLogin.bind(this)
        this.handleChange       = this.handleChange.bind(this)
        this.visibleMessage     = this.visibleMessage.bind(this)

    }

    handleLogin = (event) => {
        event.preventDefault()
        if(this.state.email === "" || this.state.password === "") {
            this.setState({message: 'Username, Password required'})  
            setTimeout( () => this.visibleMessage(), 9000 );

        } else {
            if(this.state.email === 'admin@super.com' && this.state.password === 'admin') {
                let name = "admin"
                this.props.history.push(`/admin/${name}`)

            } else {
                ConnectApi.findByEmail(this.state.email)
                .then(res => { 
                    if(res.data === undefined || res.data === "") {
                        this.setState({message: 'This user not register yet!'})
                        setTimeout( () => this.visibleMessage(), 9000 );

                    } else {
                        let emailLogin = this.state.email
                        let passwordLogin = this.state.password

                        let {id, firstname, email, password, isBlock} = res.data
                        let userId      = id
                        let userName    = firstname 
                        let emailDB     = email 
                        let passwordDB  = password 
                        let isBlocks    = isBlock 
                        
                        if(emailLogin === emailDB && passwordLogin === passwordDB && isBlocks === "f") {
                            // this.props.history.push(`/user/${userName}`)
                            this.props.history.push({
                                pathname: '/userLogin',
                                state: { userId: userId, userName: userName }
                            })

                        } else if(isBlocks === "t") {
                            this.setState({message: 'This user was blocked'})  
                            setTimeout( () => this.visibleMessage(), 9000 );

                        }else {
                            this.setState({message: 'Username or Password not match!'})  
                            setTimeout( () => this.visibleMessage(), 9000 );
                        }

                    }
                })
                .catch(err => { 
                    this.setState({message: err})
                })
            }
        }
    }

    visibleMessage = () => {
        this.setState({message: null})
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
                    <div className="column width25Pc" style={{marginTop: '10em'}}>
                        <h1>VocabApp</h1>
                        {
                            this.state.message && 
                            <div className="ui warning message">
                                <p>{this.state.message}</p>
                            </div>
                        }
                        <div className="ui attached message">
                            <div className="ui center aligned container">
                                <h4>Login</h4>
                            </div>
                        </div>
                        <form onSubmit={this.handleLogin} className="ui form attached fluid segment">
                            <div className="field ui left icon input width100Pc">
                                <input  type="email" name="email" value={this.state.username} 
                                onChange={this.handleChange} placeholder="E-mail" />
                                <i className="user icon"></i>
                            </div>
                            <div className="field ui left icon input width100Pc">
                                <input type="password" name="password" value={this.state.password} 
                                onChange={this.handleChange} placeholder="Password" />
                                <i className="lock icon"></i>
                            </div>
                            <div className="ui center aligned container">
                                <button className="ui basic button" type="submit">Login</button>
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

export default LoginComponent;