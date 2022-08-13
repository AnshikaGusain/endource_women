import React from "react";
import { Link } from "react-router-dom";
// import Icon from "../assets/logo.jsx";


const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">icube</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link to="/"><span className="nav-link navtext" aria-current="page">Women</span></Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/Kids"><span className="nav-link navtext" aria-current="page">Kids</span></Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/Home"><span className="nav-link navtext" aria-current="page">Home</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    );
}

export default Navbar;