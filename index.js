import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import mailchimp from '@mailchimp/mailchimp_marketing'
import Emailrouter from './Route.js';
import GetEmailRouter from './GetEmailRouter.js';
import MailchimpRouter from './MailChimpRouter.js';
dotenv.config();

let app=express();
let port=process.env.PORT;

mailchimp.setConfig({
    apiKey:process.env.MAILCHIMP_API_KEY,
    server:process.env.MAILCHIMP_SERVER_PREFIX,
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let mongodbUrl=process.env.MONGO_DB_CONNECTION;

try {
    mongoose.connect(mongodbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log("Database Connected");
    
} catch (error) {
    console.error(error);
}

app.use('/api',Emailrouter);
app.use('/api/sendEmails',GetEmailRouter)
app.use('/api',MailchimpRouter);
app.listen(port,()=>{
    console.log(`server is running on port-${port}`);
})