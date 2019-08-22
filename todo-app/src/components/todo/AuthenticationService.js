class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
        window.location.reload()
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return false
        return true
       
    }
}

export default new AuthenticationService()