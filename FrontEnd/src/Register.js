import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
//import alert from "./alert";
export default function Register(){
    const [FullName, setfullname] = useState("");
    const [Username, setname] = useState("");
    const [PhoneNumber,setnumber]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validForm() {

        return email.length > 0 && password.length > 0 &&  FullName.length>0 && Username.length>0  && PhoneNumber.length===10;
    
    }
    function handleSubmit(event) {

        event.preventDefault();
        console.log(FullName,Username,PhoneNumber,email,password); 
        fetch("http://localhost:5000/register",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            FullName,
            Username,
            PhoneNumber,
            email,
            password,
          })
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          if (data.status === "ok") {
            alert("Registration Successful");
          }
          if(data.status === "User already exists."){
            alert("User already exists");
          }
          if(data.status==="error"){
            alert("Enter details First");
          }
        });
    }
    const navigate=useNavigate();
    function handleClick(){
      navigate("/")
    }
    return(
        <>
        <div class="login1">
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div class="app1">
        <label>FullName</label>
        <input value={FullName} onChange={(e) => setfullname(e.target.value)} name="Fullname" id="Fullname" required />
        </div>
        <div class="app1">
        <label>Username</label>
        <input value={Username} onChange={(e) =>  setname(e.target.value)} name="Username" id="Username" required/>
        </div>
        <div class="app1">
        <label>PhoneNumber</label>
        <input value={PhoneNumber} onChange={(e) =>  setnumber(e.target.value)} name="number" id="phone" required />
        </div>
        <div class="app1">
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required/>
        </div>
        <div class="app1">
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required/>
        </div>
      <button class="button1" type="submit">REGISTER</button>
      <br></br>
      <br></br>
    <h3 style={{color:'white'}}>Already have an account?</h3>
    <button class="button1" onClick={handleClick}>LOGIN</button>
      </form>
    </div>
    </>
    );
}
