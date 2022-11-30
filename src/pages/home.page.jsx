import { useState } from "react";
import './App.css';
import React from 'react'
import FilmsList from './components/filmsList';

function HomePage(props) {

  let [list, setList] = useState(["ready", "set", "go"]);
  let [text, setText] = useState("");

  function onSubmit(event){
    event.preventDefault();
    
    let newList= [...list, text];
    setList(newList);
    setText("");
  }

    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit = {onSubmit}> 
        <input
        type = 'text'
        value = {text}
        onChange={(event) => setText(event.target.value)}
        />
        <button type ="submit">Add</button>
        </form>
        <ul>
          {list.map((item,index)=>{
            return <li key = {index + index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }


export default HomePage;
