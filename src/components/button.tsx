import {HTMLAttributes} from "react";
import clsx from "clsx";

type Props = {
} & HTMLAttributes<HTMLButtonElement>;
export const Button = (props: Props) => {
    return (
        <button
            {...props}
            className={clsx("bg-slate-900 p-2 m-1 text-slate-100 rounded" , props.className)}
        >
            {props.children}
        </button>
    );
};
