import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {Input} from "./input";
import {Button} from "./button";
import AuthHelper from "../libs/auth"

type Props = {
    isLoggedIn : boolean
} & PropsWithChildren ;
export const Layout = (props: Props) => {
    return (
        <>
            <header className={"w-full bg-slate-100 border border-b-slate-200"}>
                <div className="flex justify-between">
                    <div className="p-4 cursor-pointer hover:shadow-sm">
                        <span className={"text-4xl"}>&#8801;</span>
                        <span className={"text-2xl pl-2"}>iGapUI</span>
                    </div>
                    <div className="hidden md:flex w-full items-center">
                        <Input type="text" placeholder={"Type Something to search..."}/>
                    </div>
                    <div className="hidden md:flex flex p-2 flex justify-center items-center">
                        {props.isLoggedIn ? <>
                            <Link to={"/logout"}><Button onClick={AuthHelper.logout}>Logout</Button></Link>
                        </> : <>
                            <Link to={"/register"}><Button>Register</Button></Link>
                            <Link to={"/login"}><Button>Login</Button></Link>
                        </>}
                    </div>
                </div>
            </header>
            <main className={"min-h-screen bg-slate-50"}>
                <div className={"container mx-auto py-4 "}>
                    {props.children}
                </div>
            </main>
        </>
    );
};
