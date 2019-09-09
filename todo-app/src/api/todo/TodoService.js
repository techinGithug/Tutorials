import Axios from "axios";

class TodoDataService {
    findAllTodo() {
        return Axios.get('http://localhost:8080/users/todos')
    }

    deleteTodoById(id) {
        return Axios.delete(`http://localhost:8080/delete/todos/${id}`)
    }

    updateTodo(id) {
        return Axios.put(`http://localhost:8080/update/todos/${id}`)
    }

}

export default new TodoDataService()