import express from 'express'
import userMessage from '../model/user.moel.js';


const router = express.Router();

router.post("/message" ,async (req,res)=>{
    try{
        const {name,email,message} = await req.body;

        const newMessage = new userMessage({
            name,email,message
        });
        console.log(newMessage)
        await newMessage.save();
        res.status(200).json({
            success:true,
            message:"Messgae sent Successfully"
        });
        console.log(newMessage);

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }

    
})
export default router;