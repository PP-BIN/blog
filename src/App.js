import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App(props) {
  const data = [
   {name:"Kim", mail:"kim@gilbut"},
   {name:"Lee", mail:"lee@flower"},
   {name:"Part", mail:"park@happy"}
  ];
  return(
 
   <div className = "App">
   <h1>{props.title}</h1>
   <ul>
     {data.map((item, key)=>{
       return(<li>{item.name}[{item.mail}]</li>)
     })}
   </ul>
   </div>
  )
  
}

export default App;
