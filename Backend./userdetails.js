const mongoose=require("mongoose"); 
const details=new mongoose.Schema(
    {
    Fullname: String,
    username:String,
    Phonenumber:String,
    email:{type:String,unique:true},
    Password: String,
    },
{
    collection:"Userdetails"
});
mongoose.model("Userdetails",details)




