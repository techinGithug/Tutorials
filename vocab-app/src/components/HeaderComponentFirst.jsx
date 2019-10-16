import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HeaderComponentFirst extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }

    render() {
        return (
            <header>
                <div className="ui attached stackable menu">
                    <div className="ui container"> 
                        <>
                        <Link to="/login" className="item"> 
                            <i className="sign in alternate icon"></i>
                            Login
                        </Link>
                        <Link to="/register" className="item">
                            <i className="user plus icon"></i>
                            Register
                        </Link>
                        </>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponentFirst