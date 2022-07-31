import React from "react";
import { Link } from "react-router-dom";

const Item = ({ img, title, titleLink, brand, brandLink, price, desc, category}) => {
    let p=price.split('');
    p.shift();
    let i=0,pr=[];
    for(i=0;i<p.length;i++){
        if(p[i]===" "){
            break;
        }
        else if(p[i]===','){
            continue;
        }
        else{
            pr[i]=p[i]
        }
    }
    
    return (
        <div>
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
                <img src={img} style={{padding:"15px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6>BRAND: {brand}</h6>
                    <h6>PRICE: £{pr}</h6>
                    <Link to={`/product/${category}/${title}`}><div><span className="card-link" role="button">View Product</span></div></Link>
                    <div><a href={brandLink} className="card-link">View Brand</a></div>
                </div>
            </div>
            
        </div>
    );
}

export default Item;