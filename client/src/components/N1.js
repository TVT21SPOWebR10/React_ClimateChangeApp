import React from 'react'
import Navbar from './NavBar'
import V1 from './charts/V1';
import V5 from './charts/V5';
import V7 from './charts/V7';
export default function N1() {

    return (
        <>
        <Navbar />
        <V1 />
        <V5 />
        <V7 />
        </>
        
    );
  }