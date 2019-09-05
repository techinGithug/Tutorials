import Axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello')
        // console.log("execute HelloWorldService")
    }
}

export default new HelloWorldService()