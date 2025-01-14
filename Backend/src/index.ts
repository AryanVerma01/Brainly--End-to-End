import express from "express";
const app = express();
import { userRouter } from "./routes/userRoutes";

app.use("api/v1/user",userRouter);
// app.use("api/v1/content",contentRouter);


if(app.listen(3000)){
    console.log("Backend Running")
};