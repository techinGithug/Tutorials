import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.getWelcomeMessage = this.getWelcomeMessage.bind(this)
        this.successRespond = this.successRespond.bind(this)
        this.state = {
            welcomeMessage:''
        }

    }

    render() {
        return (
            <>
                <div className="WelcomeComponent">
                    <h2>Welcome!</h2>
                    Welcome {this.props.match.params.name}
                    {' '}<b>Todo Lists click </b><Link to="/todos">here</Link>

                </div>

                <div className="WelcomeComponent">
                    <h2>Welcome!</h2>
                    Welcome {/* {this.props.match.params.name} */}
                    {' '}
                    <button onClick={this.getWelcomeMessage} className="btn btn-primary btn-sm">Get welcome message</button>
                </div>

                <div className="WelcomeComponent">
                    <p>{this.state.welcomeMessage}</p>
                </div>
            </>
        );
    }

    getWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldService()
        .then( res => this.successRespond(res) ) 
    }

    successRespond = (res) => {
        this.setState({welcomeMessage: res.data})
    }

}  

export default WelcomeComponent