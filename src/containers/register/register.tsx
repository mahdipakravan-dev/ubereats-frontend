import AuthHelper from "../../libs/auth"
import {Button} from "../../components/button";
import {useForm} from "react-hook-form";
import {Input} from "../../components/input";

type Props = {

};
export const Register = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({});

    const onSubmit = handleSubmit((data) => {
        AuthHelper.register()
    })
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input placeholder={"Email"} register={register("email")}/>
                <Input placeholder={"Password"} register={register("password")}/>
                <Input placeholder={"Role"} register={register("role")}/>
                <Button>Register</Button>
            </form>
        </div>
    );
};
