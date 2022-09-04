import {FC, PropsWithChildren, ReactChildren} from "react"
import {gql, useQuery} from "@apollo/client";
import {isLoggedInVar} from "../apollo";
import {Route, Router, Routes} from "react-router-dom";
import {Login} from "../containers/login/login";
import {Register} from "../containers/register/register";
import {Panel} from "../containers/panel/panel";
type Props = {
} & PropsWithChildren;

const IS_LOGGED_IN = gql`
    query isLoggedIn {
        isLoggedIn @client
    }
`

export const LoggedInRouter : FC<Props> = (props) => {
    return (
        <>
            <Routes>
                <Route path={'/panel'} element={<Panel />} />
            </Routes>
        </>
    );
};
