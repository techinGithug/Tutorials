import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

class UserResultComponent extends Component {
    render() {
        const data = {
            id: this.props.location.state.userId,
            home: 'Home',
            addvocab: 'Add vocab',
            test: 'Test',
            result: 'Result',
            name: this.props.location.state.userName,
            type: 'User'
        }
        return (
            <>
            <HeaderComponent {...data} />
            <div className="ui container">
                User result vocab compnent
            </div>
            <FooterComponent />
            </>
        );
    }
}

export default UserResultComponent