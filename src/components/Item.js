import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Item = ({ s_no,img, title, brand, previousPrice, price, desc, category}) => {

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <Link to={`/product/${category}/${s_no}`}>
            <div className="card">
                <LazyLoadImage effect="blur" src={img} style={{padding:"15px" ,width:"100%",
    maxWidth:"300px",maxHeight:"350px", position:"relative",border:"none",transition:"transform .5s ease"}} className="card-img-top lazyImg" alt="..." />
                <div className="card-body">
                    <h4 className="brand text-truncate">{brand}</h4>
                <h3 className="card-title text-truncate">{title}</h3>
                    <hr/>
                </div>
            </div>
            </Link>
            
        </div>
    );
}

export default Item;