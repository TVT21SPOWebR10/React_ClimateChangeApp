import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';


function Login() {

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.username.value)
        console.log(event.target.password.value)

        try {
             const result = await axios.post()
             //do something the result
        } catch (error) {
            
        }
    }
    

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

                            </div>

                            <button className="login_button" type="submit">Log in</button>
                        </form>
                        <div className="link_container">
                            <Link className="Register" to="/register">No account? Click here to register</Link>
                        </div>

                    </div>
                    

                </>
                );
}
                export default Login
