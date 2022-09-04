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
    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
            </Routes>
        </>
    );
};
