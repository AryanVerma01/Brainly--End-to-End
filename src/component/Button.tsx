import { ReactElement } from "react"

interface ButtonProps{
    variant: "primary" | "secondary",
    size: "sm" | "md" | "lg",
    title?: string,
    onClick?: () => void | ReactElement | Promise<void>,
    starticon?:ReactElement,
    endicon?:ReactElement,
}

const variantStyles = {
    "primary":"bg-white text-black font-bold rounded-lg",
    "secondary":"bg-slate-800 text-white border-2 border-white font-bold rounded-xl"
}

const sizeStyles = {
    "sm":"px-2 py-1 m-2",
    "md":"px-4 py-2 m-4",
    "lg":"px-8 py-4 m-6"
}

export function Button(props:ButtonProps){
    return <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]}`} onClick={props.onClick}>
        <div className="flex justify-center">
            <div className="mx-1.5">{props.starticon}</div>
            <div>{props.title}</div>
            <div className="mx-1.5">{props.endicon}</div>
        </div>
        </button>
}