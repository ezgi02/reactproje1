
import './App.css';
import React,{useState,useEffect} from "react";
import axios from "axios";

export default function App() {
  const [name,setUsername]=useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => setUsername(response.data))
  },[])

  return (
    <div className="App">
      {name.map(name =>{
      return <div>
      <h4>{name.username}:{name.name}</h4>
      
      
      </div>
    })}
    </div>
  );
}


