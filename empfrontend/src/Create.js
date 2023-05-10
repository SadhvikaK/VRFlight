import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import './App.css'
 
function Home()
{
  const navigate=useNavigate();

  const [empid,setID]=useState('');
  const [username,setName]=useState('');
  
 function create(e)
  {
      e.preventDefault();            
          fetch("http://localhost:5000/create",{
            method:"POST",
            crossDomain:true,
            headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
              empid,
              username,
            })
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data);
              if(data.status==="exists"){
                alert("User already exists")
              }
              else if(data.status==="does not exist"){
                  alert("User ID created")
                  //navigate("/wel",{state:{id:empid}})
              }
              else if(data.status==="error"){
                alert("Error");
              }
            })
  }
  /*async function finduser(){
      navigate("/wel",{state:{id:empid}})
  }*/

  async function deleted(e)
  {
      e.preventDefault();
          fetch("http://localhost:5000/delete",{
            method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            empid,
            username,
          })
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
              if(data.status==="exists"){
                alert("User ID deleted")
                //navigate("/wel",{state:{id:empid}})
              }
              else if(data.status==="does not exist"){
                  alert("User does not exist")
              }
              else if(data.status==="error"){
                alert("Error");
              }
            })
      
  }
  async function finduser(e){
    e.preventDefault();
    //const {email,password}=this.State;
    //console.log(email,password); 
    fetch("http://localhost:5000/finduser",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            empid,
            username,
          })
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          if(data.status === "User exists"){
            alert("User Exists");
          }
          if(data.status === "User does not exists"){
            alert("User does not exist");
          }
          if(data.status === "error"){
            alert("Something went wrong")
          }
        });
  }

  async function update(e){
    e.preventDefault();
        fetch("http://localhost:5000/update",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            empid,
            username,
          })
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
            if(data.status==="exists"){
              alert("User ID updated")
              //navigate("/wel",{state:{id:empid}})
            }
            else if(data.status==="does not exist"){
                alert("User does not exist")
            }
            else if(data.status==="error"){
              alert("Error");
            }
          })
  }

  return (
    <>
    <h1>FlightSimulator</h1>
    <div class="login">
      <form>
      <div class="app">
      <label>EmpID</label>
      <input type="empid" value={empid} onChange={(e) => setID(e.target.value)}  id="empid" name="empid" required/>
      </div>
      <div class="app">
      <label>UserName</label>
      <input type="username" value={username} onChange={(e) => setName(e.target.value)}  name="username" id="username" required/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <button class="button" type="submit" onClick={create}>AddUser</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="button1" onClick={update}>UpdateUser</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="button2" type="submit" onClick={finduser}>FindUser</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="button3" type="submit" onClick={deleted}>DeleteUser</button>
    </form>
      </div>
    </>
  )

};
export default Home;
/*
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
export default function Update() {

  const [email, setEmail] = useState("");
  const [username, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && username.length > 0;

  }


  function handleSubmit(event) {

    event.preventDefault();
    //const {email,password}=this.State;
    console.log(email,username); 
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
    navigate("/update")
  }
  return (  
    <>
      <h1>FlightSimulator</h1>
    <div class="login">
        <form onSubmit={handleSubmit}>
      <div class="app">
      <label>Email</label>
      <input type="email"  onChange={(e) => setEmail(e.target.value)} required id="email"/>
      </div>
      <div class="app">
      <label>Password</label>
      <input type="username" value={username} onChange={(e) => setPassword(e.target.value)}  required id="username" name="username"/>
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

}*/

