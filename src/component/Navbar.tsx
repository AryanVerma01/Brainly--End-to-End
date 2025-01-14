import  { Button } from "./Button";
import { Shareicon } from "../icons/Shareicon";
import { Plusicon } from "../icons/Plusicon";
import { useSetRecoilState } from "recoil";
import { Contentcoveratom } from "../atom/Contentcover";


export function Navbar(){
const SetContentcover = useSetRecoilState(Contentcoveratom);

    return<div className="flex justify-between ">
    <div className="text-white font-bold text-3xl px-16 py-4">
      All Notes
    </div>
    <div>
      <Button variant="secondary" size="md" title="Share Brain" starticon={<Shareicon/>}/>
      <Button variant="primary" size="md" title="Add Content" starticon={<Plusicon/> } onClick={()=>SetContentcover(true)} />
    </div>
  </div>
}