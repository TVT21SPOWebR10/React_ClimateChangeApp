import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import { useNavigate, useLocation } from "react-router-dom";


    const [usernameLog, setusernameLog] = useState('');
    const [passwordLog, setpasswordLog] = useState('');

    const [loginStatus, setloginStatus] = useState('');

    const loggaainee = e => {

        e.preventDefault();

        axios.post("http://localhost:3001/api/login", {
            username: usernameLog,
            password: passwordLog,
        }).then((response) => {
            setloginStatus(response.data.message);
            console.log(response.data);
        });
    };

    return (
        <>
            <Navbar />

            <div className="LoginPage">
                <h1 className="title">Log In </h1>
                <p className="subtitle">Please log in using your username and password</p>
                <form onSubmit={handleSignupSubmit} >
                    <div className="inputs_container">

                        <input type="text" placeholder="username.." name="username"/>
                            <input type="password" placeholder="password.." name="password"/>

                <input type="password" placeholder="password.." onChange={(e)=>{
                        setpasswordLog(e.target.value)
                    }}/>
            </div>
            
            <div className="loginstatus">
                    <h1 className="LoginWrong">{loginStatus}</h1>
                    </div>

            <button onClick={loggaainee} className="login_button" type="submit">Log in</button>
        </form>
        <div className="link_container">
          <Link className="Register" to="/register">No account? Click here to register</Link>
        </div>
                
        </div>
        
        </>
    );
}
                export default Login
