import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }

        this.handleLogout = this.handleLogout.bind(this)

    }

    handleLogout = () => {
        window.location.href = '/';
    }

    render() {
        const isAdmin = this.props.isAdmin
        return (
            <header>
                <div className="ui attached stackable menu">
                    <div className="ui container"> 
                        {isAdmin ? (
                        <>
                            <Link to="#" className="item">
                                <i className="home icon"></i> {this.props.home}
                            </Link>
                            <Link to="#" className="item">
                                <i className="plus circle icon"></i> {this.props.admins}
                            </Link>
                            <Link to="#" className="item">
                                <i className="plus circle icon"></i> {this.props.users}
                            </Link>
                            <Link to="#" className="item">
                                <i className="file icon"></i> {this.props.test}
                            </Link>
                            <Link to="#" className="item">
                                <i className="question circle icon"></i> {this.props.result}
                            </Link>
                            <Link to="#" className="item">
                                <i className="signal icon"></i> {this.props.api}
                            </Link>
                            <Link to="#" className="item">
                                <i className="cogs icon"></i> {this.props.setting}
                            </Link>
                        </>
                        ) : (
                        <>
                            <Link to="#" className="item">
                                <i className="home icon"></i> {this.props.home}
                            </Link>
                            <Link to="#" className="item">
                                <i className="plus circle icon"></i> {this.props.addvocab}
                            </Link>
                            <Link to="#" className="item">
                                <i className="file icon"></i> {this.props.test}
                            </Link>
                            <Link to="#" className="item">
                                <i className="question circle icon"></i> {this.props.result}
                            </Link>
                        </>
                        )}
                       
                        <div className="right item ">
                            <i className="user icon"></i>
                            {this.props.name}
                           &nbsp;<p>[{this.props.type}]</p>
                        </div>
                        <Link to="#" className="item" onClick={this.handleLogout}>
                            <i className="sign out alternate icon"></i>Logout
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent