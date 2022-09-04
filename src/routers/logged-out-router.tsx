import {FC, PropsWithChildren, ReactChildren} from "react"
import {gql, useQuery} from "@apollo/client";
import {isLoggedInVar} from "../apollo";
import {Route, Routes} from "react-router-dom";
import {Login} from "../containers/login/login";
import {Register} from "../containers/register/register";
type Props = {
} & PropsWithChildren;

const IS_LOGGED_IN = gql`
    query isLoggedIn {
        isLoggedIn @client
    }
`

export const LoggedOutRouter : FC<Props> = (props) => {
    const {loading,data : {isLoggedIn}} = useQuery(IS_LOGGED_IN)
    console.log({isLoggedIn})
    return (
        <>
            {isLoggedIn ? <button onClick={() => {
                console.log("Clicked " , isLoggedInVar)
                isLoggedInVar(true)
                localStorage.setItem("UBER__TOKEN", "token");
            }}>Here is Public , Click To Login</button> : props.children}
            <Routes>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
            </Routes>
        </>
    );
};
