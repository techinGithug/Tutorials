import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

class UserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const data = {
            home: 'Home',
            addvocab: 'Add vocab',
            test: 'Test',
            result: 'Result',
            name: this.props.match.params.name,
            type: 'User'
        }
        return (
           <>
                    <HeaderComponent {...data} />
                    <div className="ui container">
                        
                    </div>
                    <FooterComponent />
           </>
        );
    }
}

export default UserComponent