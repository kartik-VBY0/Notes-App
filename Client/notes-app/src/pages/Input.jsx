import React from 'react'
import { useState } from 'react'
import '../styles/notepage.css'
import Note from '../components/note'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
function Input() {
    const [input,setInput]=useState({title:"",content:""});
    function handleChange(e) {
        setInput((prevValue)=>{
            return{...prevValue, [e.target.name]:e.target.value}});
    }
    
    async function handleSubmit(e) {
      const response=await fetch("http://localhost:8080/adddata",{
        method:"POST",
        body:JSON.stringify(input),
        headers:{
          "Content-Type":"application/json"}
      });
      
        
    }
    const navigate=useNavigate();
    function gotonewpage(){
        navigate('/');
    }
  return (
    <div className='input-container'>
      
      <form onSubmit={handleSubmit} >      
      <p>Title</p>        
          <input onChange={handleChange} type="text"  name="title"  placeholder='Title' value={input.title}/>         
          <p>Content</p>
          <input  onChange={handleChange} type="text"  name="content"  placeholder='Content' value={input.content}/>   
            
          <button onClick={()=>gotonewpage()} type="submit">AddNote</button> 
      </form>
    </div>
  )
}

export default Input
