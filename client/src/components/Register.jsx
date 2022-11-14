import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

const Register = () => {

    const [usernameReg, SetUsernameReg] = useState('');
    const [passwordReg, SetPasswordReg] = useState('');

    const signUp = () => {

        axios.post("http://localhost:3001/api/register", {
            username: usernameReg,
            password: passwordReg,
        }).then(() => {
            alert("toimii");
        });
    };


    return (
        <div>
            <h1 className="title">Create account </h1>
            <p className="subtitle">Please fill in your account details</p>
            <form>
                <div className="inputs_container">
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
                <Link className="Register" to="/login">Already have an account? Click here</Link>
            </div>
        </div>

    );
}
export default Register