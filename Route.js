import express from 'express'
import { EmailData } from './EmailController.js';
const Emailrouter=express.Router();

Emailrouter.post('/',EmailData);

export default Emailrouter
