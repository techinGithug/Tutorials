import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoService.js'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
            [
                // {id: 1, description: 'Learn React', done: false, targitDate: new Date()},
                // {id: 2, description: 'Lear Springboot', done: false, targitDate: new Date()},
                // {id: 3, description: 'Lear Javascript', done: false, targitDate: new Date()}
            ],
            message: null
        }

        this.deleteTodo = this.deleteTodo.bind(this)
        this.refreshTodo = this.refreshTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)

    }

    componentDidMount = () => {
        this.refreshTodo()
    }

    refreshTodo = () => {
        TodoDataService.findAllTodo()
        .then(res => {
            // console.log(res);
            this.setState({todos: res.data})
        })
    }

    deleteTodo = (id) => {
        // console.log("Delete : "+id);
        TodoDataService.deleteTodoById(id)
        .then(res => {
            this.setState({message: `Delete of todo ${id} successful`})
            this.refreshTodo()
        })
    }

    updateTodo = (id) => {
        // console.log("Update : "+id);
        this.props.history.push(`/update/${id}`)
    }

    render() {
        return (
            <div className="ListTodosComponent">
                <h1>List Todos</h1>
                <div className="container">  
                {this.state.message && <div className="alert alert-warning">{this.state.message}</div>}       
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>description</th>
                                <th>date</th>
                                <th>isDone?</th>
                                <th>update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                    <tr key={todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
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