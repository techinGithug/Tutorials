import Axios from "axios";

class ConnectApi {
    postUser = (user) => {
        return Axios.post('http://localhost:8080/regist/user', user)
    }

    findAllUser = () => {
        return Axios.get('http://localhost:8080/findAll/user')
    }

    updateUser = (id, data) => {
        return Axios.put(`http://localhost:8080/update/user/${id}`, data)
    }

    deleteUser = (id) => {
        return Axios.delete(`http://localhost:8080/delete/user/${id}`)
    }

    findByEmail = (email) => {
        return Axios.get(`http://localhost:8080/login/user/${email}`)
    }

    blockUserById = (id) => {
        return Axios.put(`http://localhost:8080/block/user/${id}`)
    }

    unblockUserById = (id) => {
        return Axios.put(`http://localhost:8080/unblock/user/${id}`)
    }

    addVocabByUser(id, vocab) {
        return Axios.post(`http://localhost:8080/addvocab/user/${id}`, vocab)
    }

    findVocabByUserId = (userId) => {
        return Axios.get(`http://localhost:8080/findVocabByUserId/user/${userId}`)
    }

    updateVocabById = (id, where, data) =>{
        return Axios.put(`http://localhost:8080/updateVocabById/user/${id}/${where}`, data)
    }

    deleteVocabById = (id) => {
        return Axios.delete(`http://localhost:8080/deleteVocabById/user/${id}`)
    }

    findLimit5Vocab = () => {
        return Axios.get('http://localhost:8080/findLimit5Vocab/user')
    }

    // postTodo = (todo) => {
    //     return Axios.post(`${JPA_API_URL}/post/todos`, todo)
    // }

}

export default new ConnectApi()