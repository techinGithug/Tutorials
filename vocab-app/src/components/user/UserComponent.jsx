import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ConnectApi from '../../api/ConnectApi';

class UserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vocabs: [],
            message: null,
            vm1: 'vm1',
            vm2: 'vm2',
            vm3: 'vm3',
            vm4: 'vm4',
            vm5: 'vm5'
        }

        this.componentFindVocabByUserId     = this.componentFindVocabByUserId.bind(this)
        this.handleDeleteVocabById        = this.handleDeleteVocabById.bind(this)
        this.handleEditVocabById            = this.handleEditVocabById.bind(this)
    }

    componentDidMount = () => {
        this.componentFindVocabByUserId()
    }

    componentFindVocabByUserId = () => {
        ConnectApi.findVocabByUserId(this.props.location.state.userId)
        .then(res => {
            if(res.data.length === 0) {
                this.setState({message: 'You are not add vocab!'})

            } else {
                this.setState({vocabs: res.data})
            }
            
        })
        .catch(err => {
            this.setState({message: ''})
        })

    }

    handleDeleteVocabById = (id) => {
        if(window.confirm("Delete this data ?")) {
            ConnectApi.deleteVocabById(id)
            .then(res => {
                this.componentFindVocabByUserId();
            })
            .catch(err => {
                this.setState({message: 'Delete is fail!'})
            })
        }
    }

    handleEditVocabById = (id, vocab, mean, userId, userName, where) => {
        this.props.history.push({
            pathname: '/userEidtVocabById',
            state: {
                id: id, 
                vocab: vocab, 
                mean: mean,
                userId: userId,
                userName: userName,
                where: where
            }
        })
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

        const userName = this.props.location.state.userName
        const {vm1, vm2, vm3, vm4, vm5} = this.state

        return (
           <>
            <HeaderComponent {...data} />
            <div className="ui container">
                <div className="mgTop20Px mgBottom20Px">
                    <h3 className="ui center aligned">Vocabs</h3>
                </div>
                
                <div className="width50Pc mgBottom5Em" style={{margin: '0 auto'}}>

                {
                    this.state.message &&
                    <div className="ui warning message center aligned">
                        <p>{this.state.message}, Pleas add vocab.</p>
                    </div>
                }

                {
                    this.state.vocabs.map(
                        vocab =>
                        <>
                        <span className="">
                            <i className="circular trash icon cursorPointer link" onClick={() => this.handleDeleteVocabById(vocab.id)}></i> | 
                            <i className="calendar plus icon mgLeft5Px"></i>
                            <span className="fs12Px">{vocab.dateAdd}</span> |
                            <i className="clock icon mgLeft5Px"></i>
                            <span className="fs12Px">{vocab.timeAdd}</span>
                        </span>
                        <table className="ui celled table mgBottom40Px">
                            <thead className="ui center aligned">
                                <tr>
                                    <th>Vocab</th>
                                    <th>Mean</th>
                                    <th width="8">Edit</th>
                                </tr>
                            </thead>
                            <tbody key={vocab.id}>
                                <tr>
                                    <td>{vocab.vocab1}</td>
                                    <td>{vocab.mean1}</td>
                                    <td><i className="circular edit icon cursorPointer link" onClick={() => 
                                        this.handleEditVocabById(vocab.id, vocab.vocab1, vocab.mean1, vocab.userId, userName, vm1)}></i></td>
                                </tr>
                                <tr>
                                    <td>{vocab.vocab2}</td>
                                    <td>{vocab.mean2}</td>
                                    <td><i className="circular edit icon cursorPointer link" onClick={() => 
                                        this.handleEditVocabById(vocab.id, vocab.vocab2, vocab.mean2, vocab.userId, userName, vm2)}></i></td>
                                </tr>
                                <tr>
                                    <td>{vocab.vocab3}</td>
                                    <td>{vocab.mean3}</td>
                                    <td><i className="circular edit icon cursorPointer link" onClick={() => 
                                        this.handleEditVocabById(vocab.id, vocab.vocab3, vocab.mean3, vocab.userId, userName, vm3)}></i></td>
                                </tr>
                                <tr>
                                    <td>{vocab.vocab4}</td>
                                    <td>{vocab.mean4}</td>
                                    <td><i className="circular edit icon cursorPointer link" onClick={() => 
                                        this.handleEditVocabById(vocab.id, vocab.vocab4, vocab.mean4, vocab.userId, userName, vm4)}></i></td>
                                </tr>
                                <tr>
                                    <td>{vocab.vocab5}</td>
                                    <td>{vocab.mean5}</td>
                                    <td><i className="circular edit icon cursorPointer link" onClick={() => 
                                        this.handleEditVocabById(vocab.id, vocab.vocab5, vocab.mean5, vocab.userId, userName, vm5)}></i></td>
                                </tr>
                            </tbody>
                        </table>
                        </>
                    )
                }
                       
                </div>
            </div>
            <FooterComponent />
           </>
        );
    }
}

export default UserComponent