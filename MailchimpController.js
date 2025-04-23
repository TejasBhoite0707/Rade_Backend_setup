import Emails from "./DatabaseModel.js";
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
    apiKey:process.env.MAILCHIMP_API_KEY,
    server:process.env.MAILCHIMP_SERVER_PREFIX,
})

const MailchimpExportcontroller=async(req,res)=>{
try {
    const allEmails=await Emails.find({});
    for(const {Email} of allEmails){
        try {
            await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID,{
                email_address:Email,
                status:'subscribed',
            });
            console.log("Exported Emails",);
            
        } catch (error) {
            if (error.response?.body?.title === 'Member Exists') {
                console.log(`⚠️ Already exists: ${Email}`);
              } else {
                console.error(`❌ Error for ${Email}:`, error.message);
              }
        }
    }
    res.status(200).json({ message: 'Emails exported successfully.' });
} catch (err) {
    console.error(err.message);
    res.status(500).json({message:"Server error while exporting Emails"})
}
}

export default MailchimpExportcontroller;