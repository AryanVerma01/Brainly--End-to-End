import { ReactElement } from "react"
import { Button } from "./Button"

interface Cardporps{
    title:string,
    type:"youtube" | "tweet",
    titleicon:ReactElement,
    icon1:ReactElement,
    icon2:ReactElement,
    link:string
}

export function Card(props:Cardporps){
    return<div className="bg-white max-w-80 py-6 rounded-lg flex flex-col mx-4">
        <div className="flex flex-cols justify-between">
            <div className="flex py-3 font-bold text-black p-2">
                {props.titleicon}{props.title}
            </div>
            <div>
                <Button variant="primary" size="sm" starticon={props.icon1}/>
                <Button variant="primary" size="sm" starticon={props.icon2}/>
            </div>
        </div>
        <div className="my-6">
            { props.type === "youtube" && <iframe className="max-w-70 mx-auto" src={props.link?.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>}

            {props.type === 'tweet' && <blockquote className="twitter-tweet"><a href={props.link.replace("x.com","twitter.com")}>January 13, 2025</a></blockquote> }
        </div>
    </div>
}