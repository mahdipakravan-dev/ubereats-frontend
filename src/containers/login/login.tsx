import {Button} from "../../components/button";
import AuthHelper from "../../libs/auth"

type Props = {

};
export const Login = (props: Props) => {
    return (
        <div>
            This is Login
            <Button onClick={AuthHelper.login}>Login</Button>
        </div>
    );
};
