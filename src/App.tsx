import {LoggedOutRouter} from "./routers/logged-out-router";
import {useReactiveVar} from "@apollo/client";
import {isLoggedInVar} from "./apollo";
import {LoggedInRouter} from "./routers/logged-in-router";
import {PublicRouter} from "./routers/public-router";

function App() {
    const isLoggedIn = useReactiveVar(isLoggedInVar)
    console.log({isLoggedIn})
    return (
            <>
                <PublicRouter/>
                {isLoggedIn ? <LoggedInRouter/> : <LoggedOutRouter/>}
            </>
    )
}

export default App
