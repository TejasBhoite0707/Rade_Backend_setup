import express from 'express';
import GetAllEmails from './GetEmailsfromMongo.js';

const GetEmailRouter = express.Router();

GetEmailRouter.get('/', async (req, res) => {
  try {
    const emails = await GetAllEmails();
    res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emails' });
  }
});

export default GetEmailRouter;
