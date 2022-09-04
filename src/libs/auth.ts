import {isLoggedInVar} from "../apollo";

class AuthHelper {
    login() {
        isLoggedInVar(true)
        localStorage.setItem("UBER__TOKEN" , "TOKEN")
    }
    logout() {
        isLoggedInVar(false)
        localStorage.removeItem("UBER__TOKEN")
    }
    register() {
        isLoggedInVar(true)
        localStorage.setItem("UBER__TOKEN" , "TOKEN")    }
}

export default new AuthHelper();
