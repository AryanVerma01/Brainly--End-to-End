// import Router from "express";
// export const contentRouter = Router();
// import { contentModel } from "../db/db";
// import { userModel } from "../db/db";
// import { tagModel } from "../db/db";
// import { authmiddleware } from "../middleware/auth";

// // @ts-ignore
// contentRouter.use(authmiddleware); 

// contentRouter.post('/create',async function(req,res){
//     const title:string = req.body.title;
//     const type:string = req.body.type;
//     const link:string = req.body.tag;
//     //@ts-ignore
//     const userid:string = req.userid;  
//     const tag:string = req.body.tag;

//     await contentModel.create({
//         title:title,
//         link:link,
//         type:type,
//         tag:tag,
//         userid:userid
//     })
// })

// contentRouter.delete("/delete",async function(req,res){
//     const contentid:string = req.body.contentid;
    
//     await contentModel.deleteOne({
//         _id:contentid
//     });

//     res.json({
//         msg:"Content Deleted Successfully"
//     })
// })

// contentRouter.get("/show",async function(req,res){
//     //@ts-ignore
//     const userid = req.userid;

//     const content: object[] = await contentModel.find({
//         userid:userid
//     });

//     res.json({
//         content
//     })

// })