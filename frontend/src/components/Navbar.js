import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.2)",zIndex:"1"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">My Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>

                    </ul>

                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto"> 
                            
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>

                    </ul>

                </div>
                    
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar