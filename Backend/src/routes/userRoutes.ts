import { Router } from "express";
export const userRouter = Router();
import bcrypt from "bcrypt";
import { userModel } from "../db/db";
import jwt from "jsonwebtoken";
const JWT_SECRET = "hello";

userRouter.post("/signup",async function(req,res){

// Input Validation using Zod (missing)
    const username:string = req.body.username;
    const password:string = req.body.password;

// hash the password and save it in DB 

    const hashedPassword:string = await bcrypt.hash(password,5);

    try{
        await userModel.create({
            username:username,
            password:hashedPassword
        });
        
        res.json({
            username:username,
            password:hashedPassword
        })

    }
    catch(e){
        res.json({
            msg:"user not created"
        })
    }
});

userRouter.post("/signin",async function(req,res){

    const username:string = req.body.username;
    const password:string = req.body.password;

// find the user in DB with username and compare passowrd and hashed password

    const foundUser = await userModel.findOne({
        username:username
    });

    let verified:boolean = false;
    if(foundUser){
        verified = await bcrypt.compare(password,foundUser.password); 
    }

    let token:string = "";
    if(verified && foundUser){
        token = await jwt.sign(foundUser.username,JWT_SECRET);
    }

    res.json({
        token:token
    });

})