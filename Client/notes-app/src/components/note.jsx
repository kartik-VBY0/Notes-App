import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/note.css'
function Note(props) {
    
  return (
    
    
    <div  className='note-container'>
        <h3>{props.title}</h3>
        <p id='date'>{props.created_at}</p>
        <p>{props.content}</p>  
    </div>
     
      
  )
}

export default Note;
