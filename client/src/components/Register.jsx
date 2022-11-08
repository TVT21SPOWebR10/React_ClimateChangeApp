import React from 'react'
import "./login.css"

const Register = () => {

    return (
        <div>
        <h1 className="title">Create account </h1>
        <p className="subtitle">Please fill in your account details</p>
        <form>
            <div className="inputs_container">
                <input type="text" placeholder="username.."/>
                <input type="password" placeholder="password.."/>
            </div>
            <input type="submit"value="Create user" className="login_button" />
        </form>
        <div className="link_container">
            <a href="" className='small'>
                Already have an account?
            </a>
        </div>
        </div>

    );
}
export default Register