import {AllHTMLAttributes} from "react";
import clsx from "clsx";

type Props = {
} & AllHTMLAttributes<HTMLInputElement>;
export const Input = (props: Props) => {
    return (
        <input
            {...props}
            className={clsx("w-full h-10 p-2 rounded border-solid border-red-200" , props.className)}/>
    );
};
