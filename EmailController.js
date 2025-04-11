import Emails from "./DatabaseModel.js";
export const EmailData=async(req,res)=>{
    const {email}=req.body;
    if(!email){
        return res.status(400).json({message:"Email is Required"});
    }
    try {
         const newEmails=new Emails({Email:email})
         await newEmails.save();
         res.status(201).json({message:"Email Saved Succesfully",email:newEmails})
    } catch (error) {
        console.error("Error while saving Email",error);
        res.status(500).json({message:"Failed to save Email"});
    }
};