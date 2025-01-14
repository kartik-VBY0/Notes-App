import React from 'react'
import '../styles/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [user, setUser] = useState({username:"",password:""});
    function handleChange(e){
        
        setUser((prevValue)=>{
            return{...prevValue, [e.target.name]:e.target.value}});
            
        }
        const navigate=useNavigate();
        async function handleSubmit(e) {        
            e.preventDefault(); // Prevent default form submission behavior
            try {
                const response = await fetch("http://localhost:8080/login", {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) {
                    navigate('/'); // Navigate to the home page on successful login
                } else {
                    const errorData = await response.json(); // Parse the error message
                    alert(errorData.message || "Login failed. Please try again.");
                }
            } catch (error) {
                console.error("Error logging in:", error);
                alert("An unexpected error occurred. Please try again later.");
            }
        }
        
    
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <p className='para'>Username</p>
          <input onChange={handleChange} type="text" id="username" name="username" required value={user.username} />
        </div>
        <div className="input-group">
          <p className='para' >Password</p>
          <input onChange={handleChange} type="password" id="password" name="password" required value={user.password}/>
          <button type="submit" class="login-btn" >Login</button>
         
        </div>
        </form>
    </div>
  </div>
        
  )
}

export default Login
