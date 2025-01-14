import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div className='navbar-container'>
      <Link to="/" style={{textDecoration:"none"}}><p  >Notes</p></Link>
      <Link to="/login"><button>LogIn</button></Link>
    </div>
  )
}

export default navbar;
