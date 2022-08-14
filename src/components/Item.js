import React from "react";
import { Link } from "react-router-dom";

const Item = ({ s_no,img, title, titleLink, brand, brandLink, price, desc, category}) => {

    return (
        <div>
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
                <img src={img} style={{padding:"15px" ,width:"18rem",height:"20rem"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6>BRAND: {brand}</h6>
                    <h6>PRICE: {price}</h6>
                    <Link to={`/product/${category}/${s_no}`}><div><span className="card-link" role="button">View Product</span></div></Link>
                    <div><a href={brandLink} className="card-link">View Brand</a></div>
                </div>
            </div>
            
        </div>
    );
}

export default Item;