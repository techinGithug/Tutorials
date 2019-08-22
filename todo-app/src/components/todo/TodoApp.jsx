import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/welcome" component={WelcomeComponent} />
                </Router>
               {/* <LoginComponent />
               <WelcomeComponent /> */}
            </div>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div className="WelcomeComponent">
                Welcome Component
            </div>
        );
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed : false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(e) {
        // console.log(this.state)
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    loginClicked() {
        if(this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            // console.log('Successful');
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        } else {
            // console.log('Failed');
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render() {
        return (
            <div className="LoginComponent">
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login successful</div>}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="" onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

// function  ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login successful</div>
//     }
//     return null
// }

export default TodoApp