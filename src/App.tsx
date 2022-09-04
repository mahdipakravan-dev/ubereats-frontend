import {LoggedOutRouter} from "./routers/logged-out-router";
import {useReactiveVar} from "@apollo/client";
import {isLoggedInVar} from "./apollo";
import {LoggedInRouter} from "./routers/logged-in-router";
import {PublicRouter} from "./routers/public-router";
import {Layout} from "./components/layout";

function App() {
    const isLoggedIn = useReactiveVar(isLoggedInVar)
    return (
            <Layout isLoggedIn={isLoggedIn}>
                <PublicRouter/>
                {isLoggedIn ? <LoggedInRouter/> : <LoggedOutRouter/>}
            </Layout>
    )
}

export default App
