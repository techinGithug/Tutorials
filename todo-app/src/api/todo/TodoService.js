import Axios from "axios";
import { API_URL, JPA_API_URL } from '../../api/todo/Constants.js';

class TodoDataService {
    findAllTodo = () => {
        return Axios.get(`${JPA_API_URL}/users/todos`)
    }

    deleteTodoById = (id) => {
        return Axios.delete(`${JPA_API_URL}/delete/todos/${id}`)
    }

    editTodo = (id) => {
        return Axios.get(`${JPA_API_URL}/edit/todos/${id}`)
    }

    updateTodo = (id, todo) => {
        return Axios.put(`${JPA_API_URL}/update/todos/${id}`, todo)
    }

    postTodo = (todo) => {
        console.log(todo)
        return Axios.post(`${JPA_API_URL}/post/todos`, todo)
    }

}

export default new TodoDataService()