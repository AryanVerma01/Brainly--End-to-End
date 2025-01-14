import { NextFunction, Response , Request } from "express";
import jwt from "jsonwebtoken"
const JWT_SECRET = "hello";

export function authmiddleware(req:Request,res:Response,next:NextFunction){

    const token = req.headers.auth;

    let founduser = ""
    if(token === "string"){
        //@ts-ignore
        founduser = jwt.verify(token,JWT_SECRET);
``  }

    if(founduser){
        // @ts-ignore
        req.userid = founduser.id;
        next();
    }
    else{
       return res.json({
        "msg":"Invalid Token"
       })
    }
}