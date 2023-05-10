const mongoose=require('mongoose'); 
const empdetails=new mongoose.Schema(
    {
    empid:{type:String,unique:true},
    username: String,
    },
{
    collection:"Empdetails"
});
mongoose.model("Empdetails",empdetails)


