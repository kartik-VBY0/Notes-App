import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

import  {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Notespage from './pages/Notespage';
import Input from './pages/Input';
function App() {
  return (
    <div>
      
      <Router> 
        <Navbar/>       
        <Routes>        
        <Route path="/" element={<Home />} />  
        <Route path="/input" element={<Input />} />  
      </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
