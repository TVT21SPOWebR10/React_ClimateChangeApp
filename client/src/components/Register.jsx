import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Navbar from './NavBar';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const [usernameReg, SetUsernameReg] = useState('');
    const [passwordReg, SetPasswordReg] = useState('');

    const signUp = () => {
        alert("Register completed!");

        axios.post("http://localhost:3001/api/register", {
            username: usernameReg,
            password: passwordReg,
        }).then(() => {
            alert("toimii");
        });navigate('/Login');
    };


    return (
        <>
        <Navbar/>
        <div className= "registerBack">
        <div>
            <h1 className="title">Create account </h1>
            <p className="subtitle">Please fill in your account details</p>
            <form>
                <div className="inputs_Regcontainer">
                    <input type="text" name="username1" placeholder="username.." onChange={(e)=>{
                        SetUsernameReg(e.target.value)
                    }}/>
                    <input type="password" name="password1" placeholder="password.." onChange={(e)=>{
                        SetPasswordReg(e.target.value)
                    }}/>

                </div>
                <button onClick={signUp} className="login_button">Create user</button>
            </form>
            <div className="link_container">
                <Link className="Register" to="/">Already have an account? Click here</Link>
            </div>
        </div>
        </div>
    </>
    );
}
export default Register