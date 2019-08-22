import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
               {/* <LoginComponent />
               <WelcomeComponent /> */}
            </div>
        );
    }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedIn)
        // location.reload(true)
        // window.location.reload();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="http://www.in28minutes.com">in28minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link to="/welcome/in28minutes" className="nav-link">Home</Link></li>}
                        {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                         {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                         {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );  
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">© Copyright 2019. All Rights Reserved. in28munites</span>
            </footer>
        );  
    }
}

class LogoutComponent extends Component {
    render() {
        // window.location.reload()
        return (
            <div className="LogoutComponent">
                <h1>Logged out</h1>
                <div className="container">
                    Thank you for using our application
                </div>
            </div>
        );  
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div className="WelcomeComponent">
                <h2>Welcome!</h2>
                Welcome {this.props.match.params.name}
                {' '}<b>Todo Lists click </b><Link to="/todos">here</Link>
            </div>
        );
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
            [
                {id: 1, description: 'Learn React', done: false, targitDate: new Date()},
                {id: 2, description: 'Lear Springboot', done: false, targitDate: new Date()},
                {id: 3, description: 'Lear Javascript', done: false, targitDate: new Date()}
            ]   
        }
    }

    render() {
        return (
            <div className="ListTodosComponent">
                <h1>List Todos</h1>
                <div className="container">         
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>isDone?</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                    <tr kdy={todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targitDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function ErrorComponent() {
    return <div style={{fontSize: "50px", color: "red"}}>Page not found</div>
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
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            window.location.reload()
            //this.setState({showSuccessMessage: true})
            //this.setState({hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login successful</div>}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-primary" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

export default TodoApp