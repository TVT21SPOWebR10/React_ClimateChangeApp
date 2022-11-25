import React from 'react'
import Navbar from './NavBar'
export default function Home(props) {

  return (
    <>
    <Navbar />
    <div>
      <div>User login status: {props.Loggedin ? "is logged in" : "PLEASE LOGIN FIRST"}</div>
    </div>
    <div>
      <button onClick={ props.logout }>Logout</button>
    </div>
    </>
  )
}
