import React from 'react'
import Navbar from './NavBar'
import V1 from './charts/V1';
import V7 from './charts/V7';
import V5 from './charts/V5';
import V6 from './charts/V6';

  export default function N1() {

    return (
        <>
        <Navbar /> 
        <V1 /> <br/>
        <V5 /> <br/>
        <V6 /> <br/>
        <V7 /> <br/>
        </>
        
    );
  }