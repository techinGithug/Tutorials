import Axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello')
        // console.log("execute HelloWorldService")
    }

    executeHelloWorldBeanService() {
        return Axios.get('http://localhost:8080/hello-bean')
        // console.log("execute HelloWorldService")
    }

    executeHelloWorldPathVariableService(name) {
        return Axios.get(`http://localhost:8080//hello-world/path-variable/${name}`)
        // console.log("execute HelloWorldService")
    }

}

export default new HelloWorldService()