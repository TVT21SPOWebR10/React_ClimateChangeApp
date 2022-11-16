import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Navbar from './NavBar';

const Register = () => {

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.username.value)
        console.log(event.target.password.value)

        try {
             const result = await axios.post('http://localhost:3000/api/register',
             {
                username: event.target.username.value,
                password: event.target.password.value,
             });
             //do something the result
             console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    


    return (
        <>
        <Navbar/>
        <div>
            <h1 className="title">Create account </h1>
            <p className="subtitle">Please fill in your account details</p>
            <form onSubmit={handleSignupSubmit}>
                <div className="inputs_Regcontainer">
                    <input type="text" name="username1" placeholder="username.." 
                        
                    />
                    <input type="password" name="password1" placeholder="password.." 
                        
                    />

                </div>
                <button type="submit" className="login_button">Create user</button>
            </form>
            <div className="link_container">
                <Link className="Register" to="/login">Already have an account? Click here</Link>
            </div>
        </div>
     </>
    );
}
export default Register