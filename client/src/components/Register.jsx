import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';


const SignUp = () => {
    const [usernameReg, SetUsernameReg] = useState("");
    const [passwordReg, SetPasswordReg] = useState("");

    axios.post('http://localhost:3001/register', {
        username: usernameReg,
        password: passwordReg,
    }).then((response) => {
        console.log(response)
    });

    return (
        <div>
            <h1 className="title">Create account </h1>
            <p className="subtitle">Please fill in your account details</p>
            <form>
                <div className="inputs_container">
                    <input type="text" placeholder="username.."></input>

                    <input type="text" placeholder="password.." ></input>

                </div>
                <button onClick={SignUp} className="login_button">Create user</button>
            </form>
            <div className="link_container">
                <Link className="Register" to="/">Already have an account? Click here</Link>
            </div>
        </div>

    );
}
export default SignUp