import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import Emailrouter from './Route.js';
dotenv.config();
let app=express();
let port=process.env.PORT;

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
app.listen(port,()=>{
    console.log(`server is running on port-${port}`);
})