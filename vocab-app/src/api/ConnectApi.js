import Axios from "axios";

class ConnectApi {
    registUser = (user) => {
        return Axios.post('http://localhost:8080/regist/user', user)
    }
    // findAllTodo = () => {
    //     return Axios.get(`${JPA_API_URL}/users/todos`)
    // }

    // deleteTodoById = (id) => {
    //     return Axios.delete(`${JPA_API_URL}/delete/todos/${id}`)
    // }

    // editTodo = (id) => {
    //     return Axios.get(`${JPA_API_URL}/edit/todos/${id}`)
    // }

    // updateTodo = (id, todo) => {
    //     return Axios.put(`${JPA_API_URL}/update/todos/${id}`, todo)
    // }

    // postTodo = (todo) => {
    //     return Axios.post(`${JPA_API_URL}/post/todos`, todo)
    // }

}

export default new ConnectApi()