import React from 'react'
import Note from '../components/note';
import { useState,useEffect } from 'react'
import {Link} from "react-router-dom";
import '../styles/home.css'
import AddIcon from '@mui/icons-material/Add';
function Home() {
  const [note,setNote]=useState([]);
  useEffect(() => {
    const getUserdata= async()=>{
      const response=await fetch("http://localhost:8080/getdata");
      const data=await response.json();
      setNote(data);
    }
    getUserdata();
  },[]);

  return (
    <div className='home-container'>
      {
      note.map((note,index)=>(
      <Note 
      id={note.key}
      title={note.title}
      created_at={note.created_at}
      content={note.content}
      />
    ))
  }

      
      <Link to = "/input"><button ><AddIcon/></button></Link>
    </div>
  )
}

export default Home
