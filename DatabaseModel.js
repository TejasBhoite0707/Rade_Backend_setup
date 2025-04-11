import mongoose from "mongoose";

let emailSchema=mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    DateCreated_at:{
        type:Date,
        default:Date.now,
    }
})

let Emails=mongoose.model('Email',emailSchema);
export default Emails;