import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }


  function handleSubmit(event) {

    event.preventDefault();
    //const {email,password}=this.State;
    console.log(email,password); 
    fetch("http://localhost:5000/login",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            email,
            password,
          })
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          if(data.status === "User exists"){
            alert("Login successful");
          }
          if(data.status === "User does not exists"){
            alert("User does not exist");
          }
          if(data.status === "error"){
            alert("Something went wrong")
          }
        });
  }
  const navigate=useNavigate();
  function handleClick(){
    navigate("/register")
  }
  return (  
    <>
    <div class="login">
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
      <div class="app">
      <label>Email</label>
      <input type="email"  onChange={(e) => setEmail(e.target.value)} required id="email"/>
      </div>
      <div class="app">
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  required id="password" name="password"/>
      </div>
      <button class="button" type="submit">LOGIN</button>
      <br></br>
      <br></br>
      <h3 style={{color:'white'}}>Don't have an account?</h3>
      <button class="button" onClick={handleClick}>REGISTER</button>
    </form>
      </div>
      </>
  );

}
