import React from "react";
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Card = ({ title, img,link}) => {
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <Link to={`/${link}/${title.toLowerCase()}`}>
            <div className="card" >
                <div className="justify-content-center">     
                <LazyLoadImage effect="blur" className="img-fluid card-img-top" src={img} style={{padding:"15px" ,width:"100%", maxWidth:"300px",maxHeight:"350px",position:"relative",border:"none",transition:"transform .5s ease" }}  alt="..." />
                </div>
                <div className="card-body">
                    <span className="btn btn-outline-dark"><h3 className="categoryTitle">{title}</h3></span>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Card;