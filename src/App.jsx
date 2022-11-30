import { useState } from "react";
import './App.css';
import React from 'react'
import FilmsList from './components/filmsList';
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


function App(props) {

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
        <FilmsList />
      </div>
    );
  }


export default App;
