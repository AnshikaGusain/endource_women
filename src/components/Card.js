import React from "react";
import {Link} from "react-router-dom";

const Card = ({ title, img,link}) => {
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <Link to={`/${link}/${title.toLowerCase()}`}>
            <div className="card">
                <img src={img} style={{padding:"15px" ,width:"100%",
    maxWidth:"300px",maxHeight:"300px",minHeight:"200px", position:"relative",border:"none" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="btn btn-outline-dark"><h3 className="categoryTitle">{title}</h3></span>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Card;