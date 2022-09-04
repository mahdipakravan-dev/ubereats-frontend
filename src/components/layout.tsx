import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {Input} from "./input";
import {Button} from "./button";

type Props = {
    isLoggedIn : boolean
} & PropsWithChildren ;
export const Layout = (props: Props) => {
    return (
        <>
            <header className={"w-100 bg-slate-100"}>
                <div className="flex justify-between">
                    <div className="p-4">
                        <span className={"text-4xl"}>&#8801;</span>
                        <span className={"text-2xl pl-2"}>iGapUI</span>
                    </div>
                    <div className="hidden md:flex w-full items-center">
                        <Input type="text" placeholder={"Type Something to search..."}/>
                    </div>
                    <div className="hidden md:flex flex p-2 flex justify-center items-center">
                        {!props.isLoggedIn && <>
                            <Link to={"/register"}><Button>Register</Button></Link>
                            <Link to={"/login"}><Button>Login</Button></Link>
                        </>}
                    </div>
                </div>
            </header>
            <main className={"bg-slate-50 min-h-100"}>{props.children}</main>
        </>
    );
};
