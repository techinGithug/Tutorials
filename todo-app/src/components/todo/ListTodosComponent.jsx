import React, { Component } from 'react';

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
            [
                {id: 1, description: 'Learn React', done: false, targitDate: new Date()},
                {id: 2, description: 'Lear Springboot', done: false, targitDate: new Date()},
                {id: 3, description: 'Lear Javascript', done: false, targitDate: new Date()}
            ]   
        }
    }

    render() {
        return (
            <div className="ListTodosComponent">
                <h1>List Todos</h1>
                <div className="container">         
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>isDone?</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                    <tr key={todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targitDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent