import React from 'react'
import "./login.css"
import Register from './Register';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

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
        <div>
        <h1 className="title">Sign In </h1>
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
            <button onClick={loggaainee} className="login_button" type="submit">Log in</button>
        </form>
        <div className="link_container">
          <Link className="Register" to="/register">Click here to register</Link>
        </div>
                    <div className="loginstatus">
                    <h1 id="loginshake">{loginStatus}</h1>
                    </div>
        </div>

    );
}
export default Login
