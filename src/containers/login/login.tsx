import {Button} from "../../components/button";
import AuthHelper from "../../libs/auth"
import {useForm} from "react-hook-form";
import {Input} from "../../components/input";
import {gql, useMutation} from "@apollo/client";
import {LoginAccountDto, LoginOutputDto} from "../../generated/graphql";

const LOGIN_MUTATION = gql`
    mutation loginMutation($loginInput : LoginAccountDto!) {
        account_login(input:$loginInput){
            ok,
            token
            error
        }
    }
`

type Props = {

};
export const Login = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginAccountDto>({});
    const [loginMutation , {loading , data , error , reset}] = useMutation<{account_login : LoginOutputDto} , {loginInput : LoginAccountDto}>(LOGIN_MUTATION , {
        onCompleted : ({ account_login }) => {
            console.log("COMPLETED " , account_login)
        },
        onError: (err) => {
            console.log("ERRORED " , err)
        }
    })
    const onSubmit = handleSubmit((data) => {
        loginMutation({variables : {loginInput : data}})
        // AuthHelper.login()
    })
    console.log({loading , error , data})
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input placeholder={"Email"} register={register("email")}/>
                <Input placeholder={"Password"} register={register("password")}/>
                <Button>Login</Button>
            </form>
        </div>
    );
};
