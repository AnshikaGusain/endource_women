import React  from "react";
import logo from "../assets/logo.png";


const Navbar = ({onChange,data}) => {
    return (
        <div>
            <div className="navb mb-2">
                <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
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
                                    <a className="nav-link active" aria-current="page" href="/">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.endource.com/men">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.endource.com/kids">Kids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.endource.com/women/shoes">Shoes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" https://www.endource.com/women/bags">Bags</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" https://www.endource.com/women/accessories">Accessories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" https://www.endource.com/sale">Sale</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" https://www.endource.com/brands">Brands</a>
                                </li>


                            </ul>
                            <a href="https://www.endource.com/login"><button className="btn btn-outline-info sign">Sign In</button></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;