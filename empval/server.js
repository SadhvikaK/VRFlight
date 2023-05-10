const express=require('express');
const cors=require('cors')
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
app.use(cors())
const mongoUrl="mongodb+srv://Flightdemo:Flightdemo@cluster0.tkkqsc1.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{useNewUrlParser: true,})
  .then(()=>{
    console.log("Connected to database");
  })
  .catch((e)=>console.log(e));
  require("./empdetails");
  const User=mongoose.model("Empdetails")
  //app.get("/create",cors(),(req,res)=>{})
  app.post('/create',async(req,res)=>{
    const{empid,username}=req.body
    /*const data={
        empid:empid,
        username:username
    }*/
    try{
        const check= await User.findOne({empid})
        if(check){
         return res.send({status:"exists"})
        }
        else{
          await User.create({
            empid:empid,
          username:username
          });   
          res.send({status:"does not exist"})
        }
    }
    catch(e){
        res.send({status:"error"})
    }
    });

  //app.get("/delete",cors(),(req,res)=>{})
  app.post('/delete',async(req,res)=>{
    const{empid,username}=req.body
    const data={
        empid:empid,
        username:username
    }
    try{
        const check=await User.findOne({empid:empid})
        if(check){
          res.send({status:"exists"})
          // res.send({status:"ok"})
          await User.deleteOne({empid:data.empid})
        }
        else{
          res.send({status:"does not exist"})
        }
      }
    catch(e){
        res.send({status:"error"})
    }
  })

 // app.get("/update",cors(),(req,res)=>{})
  app.post('/update',async(req,res)=>{
    const{empid,username}=req.body
    const data={
        empid:empid,
        username:username
    }
    try{
        const check=await User.findOne({empid:empid})
        if(check){
          //res.json("exists")
          res.send({status:"exists"})
          var old = { empid: data.empid};
          var newvalues = { $set: {username: data.username } };
          await User.updateOne(old,newvalues)
        }
        else{
          res.send({status:"does not exist"})
        }
    }
    catch(e){
      res.send({status:"error"})
    }  
  })

 
  app.post('/finduser',async(req,res)=>{
  const{empid,username}=req.body;
        try{
            const user1=await User.findOne({empid:empid})
        if(user1){
            //res.json("User exists")
            res.send({status:"User exists"});
        }
        /*if(bcrypt.compare(password,user1.password)){
            const token=jwt.sign({},JWT_SECRET);
            if(res.status(201)){
                returnres.json({status:"Okay"})
            }
            else{
                return res.json({status:"error"})
            }
        }*/
        else{
        res.send({status:"User does not exists"});
        }
        }
        catch(e){
            res.send({status:"error"})
        }
      });
  
  app.listen(5000,()=>{
    console.log("Server started at port 5000");
  });