import React from 'react'
import "./login.css"
import Register from './Register';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div>
        <h1 className="title">Sign In </h1>
        <p className="subtitle">Please log in using your username and password</p>
        <form>
            <div className="inputs_container">
                <input type="text" placeholder="username.."/>
                <input type="password" placeholder="password.."/>
            </div>
            <button className="login_button" type="submit">Log in</button>
        </form>
        <div className="link_container">
          <Link className="Register" to="/register">Click here to register</Link>
        </div>
        </div>

    );
}
export default Login
