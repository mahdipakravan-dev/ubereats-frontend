import {isLoggedInVar} from "../apollo";

class AuthHelper {
    login(token : string) {
        isLoggedInVar(true)
        localStorage.setItem("UBER__TOKEN" , token)
    }
    logout() {
        isLoggedInVar(false)
        localStorage.removeItem("UBER__TOKEN")
    }
    register(token : string) {
        isLoggedInVar(true)
        localStorage.setItem("UBER__TOKEN" , token)    }
}

export default new AuthHelper();
