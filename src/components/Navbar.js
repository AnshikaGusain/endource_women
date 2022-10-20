import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column" >
                    <div className="my-2">
                        <Link to='/'>
                            <div className="logo">
                                    <img src="https://i.imgur.com/D39K5wu.jpeg"  alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                                <li className="nav-item mx-2">
                                    <Link to="/Women"><span className="nav-link navtext" aria-current="page">Women</span></Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="/Kids"><span className="nav-link navtext" aria-current="page">Kids</span></Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="/Home"><span className="nav-link navtext" aria-current="page">Home Furnishings</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
    );
}

export default Navbar;