import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ConnectApi from '../../api/ConnectApi';

class UserAddVocabComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vocab1: '',
            vocab2: '',
            vocab3: '',
            vocab4: '',
            vocab5: '',
            mean1 : '',
            mean2 : '',
            mean3 : '',
            mean4 : '',
            mean5 : '',
            message: null
        }

        this.handleSaveVocab    = this.handleSaveVocab.bind(this)
        this.handleChange       = this.handleChange.bind(this)
        this.hideMessage        = this.hideMessage.bind(this)
        this.clearInputField    = this.clearInputField.bind(this)
    }

    handleSaveVocab = (event) => {
        event.preventDefault()
        let id =  this.props.location.state.userId
        let {vocab1, vocab2, vocab3, vocab4, vocab5, mean1, mean2, mean3, mean4, mean5}  = this.state
        if(vocab1 === "" || vocab2 === "" || vocab3 === "" || vocab4 === "" || vocab5 === "" || 
            mean1 === "" || mean2 === "" || mean3 === "" || mean4 === "" || mean5 === "") {
            this.setState({message: 'Please fill all input!'})
            setTimeout( () => this.hideMessage(), 5000 );

        } else {
            let data = {
                vocab1: vocab1,
                vocab2: vocab2,
                vocab3: vocab3,
                vocab4: vocab4,
                vocab5: vocab5,
                mean1 : mean1,
                mean2 : mean2,
                mean3 : mean3,
                mean4 : mean4,
                mean5 : mean5,
                dateAdd: new Date().toLocaleDateString(),
                timeAdd: new Date().toLocaleTimeString()
            }
            ConnectApi.addVocabByUser(id, data)
            .then(res => {
                this.setState({message: ''})
            })
            .catch(err => {
                this.setState({message: 'Add vocab was failed'})
            })
            setTimeout( () => this.clearInputField(), 2000 );
        }
    }

    hideMessage =  () => {
        this.setState({message: null})
    }

    clearInputField = () => {
        this.setState({
            vocab1: '',
            vocab2: '',
            vocab3: '',
            vocab4: '',
            vocab5: '',
            mean1 : '',
            mean2 : '',
            mean3 : '',
            mean4 : '',
            mean5 : ''
        })
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
        return (
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
                                <h4>Add vocab</h4>
                            </div>
                        </div>
                        <form onSubmit={this.handleSaveVocab} className="ui form attached fluid segment">
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="vocab1" value={this.state.vocab1} 
                                    onChange={this.handleChange} placeholder="Vocab1" />
                                </div>
                                <div className="field">
                                    <input type="text" name="mean1" value={this.state.mean1} 
                                    onChange={this.handleChange} placeholder="Mean1" />                                   
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="vocab2" value={this.state.vocab2} 
                                    onChange={this.handleChange} placeholder="Vocab2" />
                                </div>
                                <div className="field ">
                                    <input type="text" name="mean2" value={this.state.mean2} 
                                    onChange={this.handleChange} placeholder="Mean2" />
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="vocab3" value={this.state.vocab3} 
                                    onChange={this.handleChange} placeholder="Vocab3" /> 
                                </div>
                                <div className="field">
                                    <input type="text" name="mean3" value={this.state.mean3} 
                                    onChange={this.handleChange} placeholder="Mean3" />                                  
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="vocab4" value={this.state.vocab4} 
                                    onChange={this.handleChange} placeholder="Vocab4" />
                                </div>
                                <div className="field">
                                    <input type="text" name="mean4" value={this.state.mean4} 
                                    onChange={this.handleChange} placeholder="Mean4" />
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="vocab5" value={this.state.vocab5} 
                                    onChange={this.handleChange} placeholder="Vocab5" />
                                </div>
                                <div className="field">
                                    <input type="text" name="mean5" value={this.state.mean5} 
                                    onChange={this.handleChange} placeholder="Mean5" />
                                </div>
                            </div>
                            <div className="ui center aligned container">
                                <button className="ui basic button" type="submit">Save</button>
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

export default UserAddVocabComponent