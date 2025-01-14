import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/note.css'
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {
    const navigate=useNavigate();
    async function deletenote(){
        const response=await fetch("http://localhost:8080/deletedata",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "id":props.id
            })
        }).then((res)=>{
            if(res.ok){
                console.log("deleted");
               
            }
        })
        
    }
    
    
  return (
    
    
    <div  className='note-container'>
        
        <h3>{props.title}</h3>
        <p id='date'>{props.created_at}</p>
        <p>{props.content}</p> 
        <div className='buttons'>        
        <button id='update'>Update</button>
        <button onClick={deletenote}  id='delete'>Delete</button>
        </div> 
    </div>
     
      
  )
}

export default Note;
