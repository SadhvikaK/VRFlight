import React,{useState} from "react";
import { Route,Routes } from 'react-router-dom';
import Create from './Create'
//import welcome from './welcome'

function App() {
  return ( 
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Create/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
