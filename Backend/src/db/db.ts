import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
mongoose.connect("mongodb+srv://iaryanverma2004:UrSpD1DD2Y31jyvV@cluster0.a6cy2.mongodb.net/brainly");

const userSchema = new Schema({
    username:{type:String , required:true , unique:true},
    password:{type:String , required:true}
})

const tagSchema = new Schema({
    title:{type:String, required:true, unique:true}
})

const contentSchema = new Schema({
    title:{type:String,required:true},
    type:{type:String,required:true},
    link:{type:String,required:true},
    tag:{type:mongoose.Types.ObjectId , ref:'tag'},        /* tag is reference from tag model (type:mongoose.Types.objectId , ref:modelname) */
    userid:{type:mongoose.Types.ObjectId , ref:'User'}       /* userid is referance from user model */
});

const LinkSchema = new Schema({
    hash:{type:String , required:true},
    userid:{type:mongoose.Types.ObjectId , ref:"User"}    /* userid is rqference from usermodel */
})

export const userModel = mongoose.model('User',userSchema);
export const tagModel = mongoose.model("tag",tagSchema);
export const contentModel = mongoose.model("content",contentSchema);
export const linkModel = mongoose.model("link",LinkSchema);