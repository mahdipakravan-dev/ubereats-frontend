import {Button} from "../../components/button";
import {useForm} from "react-hook-form";
import {Input} from "../../components/input";
import {gql, useMutation} from "@apollo/client";
import {CreateAccountDto, CreateAccountOutputDto, UserRole} from "../../generated/graphql";
import {useNavigate} from "react-router-dom";

export const REGISTER_MUTATION = gql`
    mutation registerMutation($input : CreateAccountDto!) {
        account_register(input: $input){
            ok,
            error
        }
    }
`;

type Props = {

};
export const Register = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountDto>({});
    const [registerMutation , { loading , data , called , error}] = useMutation<
        {["account_register"] : CreateAccountOutputDto},
        {input : CreateAccountDto}>(REGISTER_MUTATION ,
    {
     onCompleted : ({account_register}) => {
         console.log(account_register)
         if(!account_register.ok) {
             alert(account_register.error)
             return
         }
         alert("Registered ! , Please Verify Your Email And Login")
         navigate("login")
         // AuthHelper.register(account_register)
     },
     onError : (error) => {
         alert("Errored")
     }
    })

    const onSubmit = handleSubmit((data) => {
        registerMutation({variables: {
            input : {
                ...data,
                role : UserRole.Client
            }
        }})
        // AuthHelper.register()
    })
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input placeholder={"Email"} register={register("email")}/>
                <Input placeholder={"Password"} register={register("password")}/>
                <Button>{loading ? "Wait..." : "Register"}</Button>
            </form>
        </div>
    );
};
