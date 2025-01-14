import { Crossicon } from "../icons/cross"
import { Button } from "./Button"
import { Contentcoveratom } from "../atom/Contentcover"
import { useSetRecoilState } from "recoil"
import { Usernameatom } from "../atom/Usernameatom"
import { Passwordatom } from "../atom/Passwordatom"

interface Modalprops{
    open:boolean
}

export function Contentcover(props:Modalprops){
    let SetContentcover = useSetRecoilState(Contentcoveratom);
    let SetUsernameatom = useSetRecoilState(Usernameatom);
    let SetPasswordatom = useSetRecoilState(Passwordatom);

   if(props.open == true){
    return <div className="bg-black bg-opacity-60 h-screen w-screen flex flex-row justify-center fixed top-0 bottom-0 mx-auto">
            <div className="h-56 w-80 bg-white text-black my-auto rounded-xl flex flex-col justify-around">
                <Button variant="primary" size="sm" starticon={<Crossicon />} onClick={() => SetContentcover(false)}/>
                <input className="border-2 border-black mx-6 font-bold text-center" type="text" placeholder="Username" onChange={ (e) => SetUsernameatom(e.target.value)}></input>
                <input className="border-2 border-black mx-6 font-bold text-center" type="text" placeholder="Password" onChange={(e) => SetPasswordatom(e.target.value)}></input>
                <Button variant="secondary" size="lg" title="Submit"/>
            </div>
        </div>
   }
}