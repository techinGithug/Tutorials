import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ConnectApi from '../../api/ConnectApi';

class UserEditVocabById extends Component {
    constructor(props) {
        super(props)
        let {id, userId, vocab, mean, userName, where} = this.props.location.state
        this.state = {
            id: id,
            vocab: vocab,
            mean: mean,
            userId: userId,
            userName: userName,
            where: where,
            message: null
        }
        this.handleChange       = this.handleChange.bind(this)
        this.handleEditVocab    = this.handleEditVocab.bind(this)
        this.hideMessage        = this.hideMessage.bind(this)

    }

    handleEditVocab = (event) => {
        event.preventDefault()
        if(this.state.vocab === "" || this.state.mean === "") {
            this.setState({message: 'Please fill all input!'})
            setTimeout( () => this.hideMessage(), 3000 );
        } else {
            const {id, vocab, mean, where} = this.state
            const data = {
                vocab: vocab,
                mean: mean
            }
            ConnectApi.updateVocabById(id, where, data)
            .then(res => {
                console.log(res)
                this.props.history.push({
                    pathname: '/userLogin',
                    state: {userName: this.state.userName, userId: this.state.userId}
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({message: 'Update has error!'})
            })
        }
        
    }

    hideMessage =  () => {
        this.setState({message: null})
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const data = {
            id: this.props.location.state.userId,
            home: 'Home',
            addvocab: 'Add vocab',
            test: 'Test',
            result: 'Result',
            name:  this.props.location.state.userName,
            type: 'User'
        }

        return(
            <>
            <HeaderComponent {...data} />
            <div className="ui container">
                <div className="ui one column doubling stackable grid center aligned container">
                    <div className="column width50Pc" style={{marginTop: '5em'}}>
                        {
                            this.state.message && 
                            <div className="ui warning message">
                                <p>{this.state.message}</p>
                            </div>
                        }
                        <div className="ui attached message">
                            <div className="ui center aligned container">
                                <h4>Edit vocab</h4>
                            </div>
                        </div>
                        <form onSubmit={this.handleEditVocab} className="ui form attached fluid segment">
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="vocab" value={this.state.vocab} 
                                    onChange={this.handleChange} placeholder="Vocab1" />
                                </div>
                                <div className="field">
                                    <input type="text" name="mean" value={this.state.mean} 
                                    onChange={this.handleChange} placeholder="Mean1" />                                   
                                </div>
                            </div>
                            <div className="ui center aligned container">
                                <button className="ui basic button" type="submit">Update</button>
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

export default UserEditVocabById;