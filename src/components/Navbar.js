import React  from "react";
import logo from "../assets/logo.png";


const Navbar = () => {
    return (
        <div className="container-fluid" style={{backgroundColor: "#e3f2fd"}}>
            <div className="navb container-fluid">
                <nav className="navbar navbar-expand-lg" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img id="company" src={logo}
                            alt="endource" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
<<<<<<< HEAD
                                
=======
>>>>>>> fe6dbf40c25dbb33ca64a63fe523abd2d7f04d84
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;