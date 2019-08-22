import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        }
       
        this.increament = this.increament.bind(this)
        this.decrement = this.decrement.bind(this)

        this.increament5 = this.increament5.bind(this)
        this.decrement5 = this.decrement5.bind(this)

        this.increament10 = this.increament10.bind(this)
        this.decrement10 = this.decrement10.bind(this)

        this.resetResult = this.resetResult.bind(this)

    }

    render() {
        return (
            <div className="counter">
                <div>
                    <button className="btn-normal" onClick={this.increament}>+1</button>
                    <button className="btn-normal" onClick={this.decrement}>-1</button>
                </div>
                <div>
                    <button className="btn-normal" onClick={this.increament5}>+5</button>
                    <button className="btn-normal" onClick={this.decrement5}>-5</button>
                </div>
                <div>
                    <button className="btn-normal" onClick={this.increament10}>+10</button>
                    <button className="btn-normal" onClick={this.decrement10}>-10</button>
                </div>
                
                <div className="count">{this.state.counter}</div>
                <div><button className="btn-reset" onClick={this.resetResult}>Reset</button></div>
            </div>
        );
    }

    increament() {
        // console.log('increament');
        this.setState({
            counter: this.state.counter+1
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter-1
        })  
    }

    increament5() {
        this.setState({
            counter: this.state.counter+5
        })
    }

    decrement5() {
        this.setState({
            counter: this.state.counter-5
        })
    }

    increament10() {
        this.setState({
            counter: this.state.counter+10
        })
    }

    decrement10() {
        this.setState({
            counter: this.state.counter-10
        })
    }

    resetResult() {
        this.setState({
            counter: this.state.counter = 0
        })
    }

}

export default Counter