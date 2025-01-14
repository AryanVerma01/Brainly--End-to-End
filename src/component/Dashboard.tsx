import { Navbar } from "../component/Navbar";
import { Card } from "../component/Card";
import { Shareicon } from "../icons/Shareicon";
import { Plusicon } from "../icons/Plusicon";
import { Arrowicon } from "../icons/Arrowicon";
import { Contentcover } from "../component/Contentcover"; 
import { Contentcoveratom } from "../atom/Contentcover";
import { useRecoilValue } from "recoil";
import { Sidebar } from "../component/Sidebar";



export function Dashboard(){
    let ContentcoverValue = useRecoilValue(Contentcoveratom);

  return <div className="bg-slate-800 h-screen text-white relative">
    <Contentcover open={ContentcoverValue} />
    <div className="flex flex-rows">
      <div>
        <Sidebar/>
      </div>
      <div>
        <Navbar />
        <div className="flex my-4 mx-6">
          <div>
            <Card title="Project Ideas" icon1={<Shareicon/>} icon2={<Plusicon/>}
            titleicon={<Arrowicon/>} link="https://x.com/kirat_tw/status/1633685473821425666" type="tweet"/>
          </div>
          <div>
            <Card title="Youtube video" icon1={<Shareicon/>} icon2={<Arrowicon/>}
            type="youtube" link="https://www.youtube.com/watch?v=FxgM9k1rg0Q" titleicon={<Plusicon/>}/>
          </div>
          <div>
            <Card title="Youtube video" icon1={<Shareicon/>} icon2={<Arrowicon/>}
            type="youtube" link="https://www.youtube.com/watch?v=FxgM9k1rg0Q" titleicon={<Plusicon/>}/>
          </div>
          
        </div>
      </div>
    </div>
    </div>
}