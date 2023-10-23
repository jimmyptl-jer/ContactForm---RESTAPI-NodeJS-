import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:'Firstname is required'
  },
  lastName:{
    type:String,
    required:'Lastname is required'
  },
  email:{
    type:String,
  },
  company:{
    type:String
  },
  phone:{
    type:String
  },
  createAt:{
    type:Date,
    default:Date.now
  }
})

const Contact = mongoose.model('Contact',contactSchema);
export default Contact;
