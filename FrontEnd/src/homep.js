import {React,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App1.css';
import axios from 'axios';
function Home()
{
    const navigate=useNavigate();

    const [empid, setEmail] = useState("");
    const [username, setPassword] = useState("");
    
    async function create(e)
    {
        e.preventDefault();
        try{
            await axios
            .post("http://localhost:5000/create",{
              empid,username
            })
            .then(res=> {
                if(res.data==="exists"){
                  alert("User already exists")
                }
                else if(res.data==="does not exist"){
                    alert('Student data created')
                  navigate("/wel",{state:{id:empid}})
                }
              })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e)
        {
            console.log(e);
        }
    }
    async function display(){
        navigate("/wel",{state:{id:empid}})
    }

    async function handleSubmit(e)
    {
        e.preventDefault();
        try{
            await axios
            .post("http://localhost:5000/delete",{
              empid,username
            })
            .then(res=> {
                if(res.data==="exists"){
                  alert("Student data deleted")
                  navigate("/wel",{state:{id:empid}})
                }
                else if(res.data==="does not exist"){
                    alert("Student does not exist")
                }
              })
            .catch(e=>{
              alert("wrong details")
              console.log(e);
            })
        }
        catch(e)
        {
            console.log(e);
        }
    }

    async function update(e){
      e.preventDefault();
      try{
          await axios.post("http://localhost:5000/update",{
            empid,username
          })
          .then(res=> {
              if(res.data==="exists"){
                alert("Student data updated")
                navigate("/wel",{state:{id:empid}})
              }
              else if(res.data==="does not exist"){
                  alert("Student does not exist")
              }
            })
          .catch(e=>{
            alert("wrong details")
            console.log(e);
          })
      }
      catch(e)
      {
          console.log(e);
      }
    }


  return(
    <>
      <h1>FlightSimulator</h1>
    <div class="login2">
      <form onSubmit={handleSubmit}>
      <div class="app2">
      <label>EmpID</label>
      <input type="empid" value={empid} onChange={(e) => setEmail(e.target.value)} required id="empid"/>
      </div>
      <div class="app2">
      <label>UserName</label>
      <input type="username" value={username} onChange={(e) => setPassword(e.target.value)}  required id="username" name="username"/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <button class="button" type="submit" >AddUser</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="button1" >UpdateUser</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="button2" type="submit">FindUser</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="button3" type="submit">DeleteUser</button>
    </form>
      </div>
      </>
  );
}
export default Home;