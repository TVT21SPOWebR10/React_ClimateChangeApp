import React from 'react'
import Navbar from './NavBar'
import V8 from './charts/V8';


export default function N2() {
  return (
    <>
    <Navbar />
    <div>Näkymän tulee esittää visualisoinnit V8 ja V9</div>
    <V8 /> <br/>
    
    </>
  );
}
