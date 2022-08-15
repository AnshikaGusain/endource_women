import React from "react";
import { Link } from "react-router-dom";
// import Icon from "../assets/logo.jsx";


const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                    <Link to='/'>
                        <div className="logo">
                            <img src="https://i.imgur.com/D39K5wu.jpeg" alt="" />
                        </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link to="/Women"><span className="nav-link navtext" aria-current="page">Women</span></Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/Kids"><span className="nav-link navtext" aria-current="page">Kids</span></Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/Home"><span className="nav-link navtext" aria-current="page">Home Furnishings</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    );
}

export default Navbar;