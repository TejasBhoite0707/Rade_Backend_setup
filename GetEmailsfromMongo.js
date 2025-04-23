import Emails from "./DatabaseModel.js";
const GetAllEmails=async()=>{
    try {
        const EmailContacts=await Emails.find(); 
        const emails=EmailContacts.map((contact)=>contact.Email);
        console.log("TEjas",emails);
        return emails;  
    } catch (error) {
        console.error(error);
        
    }
    
};
export default GetAllEmails;
