import {AllHTMLAttributes} from "react";
import clsx from "clsx";
import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";

type Props = {
    register ?: UseFormRegisterReturn;
} & AllHTMLAttributes<HTMLInputElement>;
export const Input = (props: Props) => {
    return (
        <input
            {...props}
            {...props.register}
            className={clsx("w-full h-10 p-2 rounded bg-slate-100 my-2" , props.className)}/>
    );
};
