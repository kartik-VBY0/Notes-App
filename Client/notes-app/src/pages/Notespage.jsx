import React from 'react'
import { useState } from 'react'
import '../styles/notepage.css'
function Notespage() {
  return (
    
      <div className='notepage-container'>
        
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} >      
      <p>Title</p>        
          <input onChange={handleChange} type="text"  name="title"  placeholder='Last Name' value={user.l_name}/>         
          <p>Content</p>
          <input  onChange={handleChange} type="text"  name="phone"  placeholder='Phone Number' value={user.phone}/>   
            
          <button type="submit">AddNote</button> 
      </form>
      
    </div>
    
  )
}

export default Notespage;
