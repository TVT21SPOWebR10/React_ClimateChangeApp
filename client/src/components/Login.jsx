import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import { useNavigate, useLocation } from "react-router-dom";

const Login = (props) => {

    const [usernameLog, setusernameLog] = useState('');
    const [passwordLog, setpasswordLog] = useState('');
    const navigate = useNavigate();
    const [loginStatus, setloginStatus] = useState(false);
    const [loginStatusText, setloginStatusText] = useState('');


    const loggaainee = e => {

        e.preventDefault();

        axios.post("http://localhost:3001/api/login", {
            username: usernameLog,
            password: passwordLog,
        }).then((response) => {
            if(!response.data.auth){
                setloginStatus(false);
            }else{
            console.log(response.data);
            localStorage.setItem("token", response.data.token)
            const receivedJWT = response.data.token;
            props.login(receivedJWT);
            setloginStatus(true);
            localStorage.setItem("id", response.data.result[0].id);
            localStorage.setItem("username", response.data.result[0].username);
            navigate('/Home');
            }
        });
    };

    return (
        <>
        <Navbar/>
        
        <div className="LoginPage">
        <h1 className="title">Log In </h1>
        <p className="subtitle">Please log in using your username and password</p>
        <form>
            <div className="inputs_container">

                <input type="text" placeholder="username.." onChange={(e)=>{
                        setusernameLog(e.target.value)
                    }}/>

                <input type="password" placeholder="password.." onChange={(e)=>{
                        setpasswordLog(e.target.value)
                    }}/>
            </div>
            
                    <div className="loginstatus">
                    <h1 className="LoginWrong">{loginStatus}{loginStatusText}</h1>
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
