    const express=require('express');
    const app=express();
    const mongoose=require('mongoose');
    app.use(express.json())
    const cors=require('cors');
    app.use(cors());
    const bcrypt=require("bcryptjs");

    //const jwt=require("jsonwebtoken");
    //const JWT_SECRET="qwertyuiop0987654321!@#$%^&sdfghjkl%^&*()/*-mnbvcx2335";


    const mongourl="mongodb+srv://Flightdemo:Flightdemo@cluster0.tkkqsc1.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(mongourl,{
        useNewUrlParser:true
    }).then(()=>{console.log("Connected to database");})
    .catch(e=>console.log(e)); 

    require("./userdetails")
    const User=mongoose.model("Userdetails");
    app.post('/register',async(req,res)=>{
        const {FullName,Username,PhoneNumber,email,password}=req.body;
        const encrypt=await bcrypt.hash(password,10)    
        try{
            const old= await User.findOne({email});
            if(old){
            return res.send({status:"User already exists."})
            //alert("User already exists");
            //console.log("User already exists");
            }
            await User.create({
                Fullname:FullName,
                username:Username,
                Phonenumber:PhoneNumber,
                email,
                Password:encrypt,
            });
            res.send({status:"ok"});
            //alert("Registration success");
        }
        catch(error){
            res.send({status:"error"});
        //alert("error");
        }
    });

    app.post('/login',async(req,res)=>{
        const{email,password}=req.body;
        try{
            const user1=await User.findOne({email:email})
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
        try{
            const check=await collection.findOne({email:email})
    
            if(check){
            res.json("exists")
            }
            else{
            res.json("does not exist")
            await collection.insertMany([data])
            }
        }
        catch(e){
            res.json("not exist")
        }
    

    app.listen(5000,()=>{
        console.log("Server Started");
    });

    app.post('/post',async(req,res)=>{
        console.log(req.body);
        const {email}=req.body;
        try{
        if(email=="sadhvika02@gmail.com"){
            res.send({status:"Successful"})
        }
        else{
            res.send({status:"User Not Found"})
        }
    }
    catch(error){
        res.send({status:"Something went wrong.Try again"})
    }
    });
