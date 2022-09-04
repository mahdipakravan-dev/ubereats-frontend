import AuthHelper from "../../libs/auth"
import {Button} from "../../components/button";

type Props = {

};
export const Register = (props: Props) => {
    return (
        <div>
            Register
            <Button onClick={AuthHelper.register}>Register</Button>
        </div>
    );
};
