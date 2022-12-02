import React, { useState } from 'react'
import Navbar from './NavBar'

export default function Home(props) {


  return (
    <>
    <Navbar />
    <div>
      <button className="logoutBtn" onClick={ props.logout }>Logout</button>
    </div>
    </>
  )
}
