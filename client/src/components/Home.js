import React, { useState } from 'react'
import Navbar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

  const navigate = useNavigate();
  
  const deleteAccount = () => {
    
    const id = window.localStorage.getItem('id');
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(res => {
        console.log(res)
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('id');
        window.location.reload(false);
        navigate('/Login')
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      deleteAccount();
    }
  }




  return (
    <>
    <Navbar />
    <div>
      <button className="deleteBtn" onClick={ confirmDelete }>Delete Account</button>
    </div>
    </>
  )
}
