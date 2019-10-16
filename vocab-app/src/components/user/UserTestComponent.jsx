import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ConnectApi from '../../api/ConnectApi.js';

class UserTestComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vocabs:[],
            isValid: false
        }

        this.findVocabForTest = this.findVocabForTest.bind(this)
        this.handleSaveVocab    = this.handleSaveVocab.bind(this)
    }

    findVocabForTest = () => {
        ConnectApi.findLimit5Vocab()
        .then(res => {
            let rand = res.data[Math.floor(Math.random() * res.data.length)];
            this.setState({
                vocabs: rand,
                isValid: true
            })
            console.log(this.state.vocabs)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleSaveVocab = (event) => {
        console.log("Save... test")
    }

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
                <div className="ui one column doubling stackable grid center aligned container">
                    <div className="column width50Pc" style={{marginTop: '1em'}}>
                        <button className="ui basic button" onClick={() => this.findVocabForTest()}>Start</button>
                        {
                            this.state.isValid &&
                            <>
                            <div className="ui attached message">
                                <div className="ui center aligned container">
                                    <h4>Add vocab</h4>
                                </div>
                            </div>

                            <form onSubmit={this.handleSaveVocab} className="ui form attached fluid segment">
                                <div className="two fields">
                                    <div className="field">
                                        <input type="text" name="vocab1" value={this.state.vocabs.vocab1} 
                                        onChange={this.handleChange} placeholder="Vocab1" />
                                    </div>
                                    <div className="field">
                                        <input type="text" name="mean1" value="" 
                                        onChange={this.handleChange} placeholder="Mean1" />                                   
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <input type="text" name="vocab2" value={this.state.vocabs.vocab2} 
                                        onChange={this.handleChange} placeholder="Vocab2" />
                                    </div>
                                    <div className="field ">
                                        <input type="text" name="mean2" value="" 
                                        onChange={this.handleChange} placeholder="Mean2" />
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <input type="text" name="vocab3" value={this.state.vocabs.vocab3} 
                                        onChange={this.handleChange} placeholder="Vocab3" /> 
                                    </div>
                                    <div className="field">
                                        <input type="text" name="mean3" value="" 
                                        onChange={this.handleChange} placeholder="Mean3" />                                  
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <input type="text" name="vocab4" value={this.state.vocabs.vocab4} 
                                        onChange={this.handleChange} placeholder="Vocab4" />
                                    </div>
                                    <div className="field">
                                        <input type="text" name="mean4" value=""
                                        onChange={this.handleChange} placeholder="Mean4" />
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <input type="text" name="vocab5" value={this.state.vocabs.vocab5} 
                                        onChange={this.handleChange} placeholder="Vocab5" />
                                    </div>
                                    <div className="field">
                                        <input type="text" name="mean5" value=""
                                        onChange={this.handleChange} placeholder="Mean5" />
                                    </div>
                                </div>
                                <div className="ui center aligned container">
                                    <button className="ui basic button" type="submit">Save</button>
                                </div>
                            </form>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
            <FooterComponent />
            </>
        );
    }
}

export default UserTestComponent