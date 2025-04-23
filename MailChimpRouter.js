import MailchimpExportcontroller from "./MailchimpController.js";

import express from 'express'

const MailchimpRouter=express.Router();

MailchimpRouter.post('/mailchimpEmails',MailchimpExportcontroller);

export default MailchimpRouter;