import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Navbar(props) {

    //logout funktio
    const auth = window.localStorage.getItem('token');
    const navigate = useNavigate();
    const loggaout = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('id');
        window.location.reload(false);
        navigate('/Login')
    }

    return (
        <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/N1'>ClimateChangeApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/N1">Temperature data and co2 concentrations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/N2">Emission sources</Link>
                        </li>
                        {auth ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={loggaout} className="nav-link" to="/">Logout</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">SignUp</Link>
                                </li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
}