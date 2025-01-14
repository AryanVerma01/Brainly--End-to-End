import { Button } from "./Button"
import { BackendURl } from "../BackendUrl";
import { useRef } from "react";
import  axios from "axios";

export function Signin(){
    
    const usernameRef = useRef<HTMLInputElement>(null);  // Proper initialization
    const passwordRef = useRef<HTMLInputElement>(null);  // Proper initialization
    
    async function signin(){
        const username = await usernameRef.current?.value;
        const password = await passwordRef.current?.value;
        await axios({
            url:`${BackendURl}signup`,
            method:"post",
            data:{
                username,
                password
            }
        })
    }

    return<div className="bg-black h-screen flex justify-center">
        <div className="flex justify-center">
            <div className="h-56 w-80 bg-white text-black my-auto rounded-xl flex flex-col justify-around">
                <input ref={usernameRef} className="border-2 border-black mx-6 font-bold text-center" type="text" placeholder="Username"></input>
                <input ref={passwordRef} className="border-2 border-black mx-6 font-bold text-center" type="text" placeholder="Password"></input>
                <Button variant="secondary" size="lg" title="Submit" onClick={signin}/>
            </div>
        </div>
    </div>
}