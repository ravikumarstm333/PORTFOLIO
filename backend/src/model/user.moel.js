import mongoose from "mongoose";

const usersMessageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:20,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    message:{
        type:String,
        required:true,
        maxlength:100,
        trim:true,
    }
})

const userMessage = mongoose.model("UserMessage",usersMessageSchema,"userMessages");
export default userMessage;
