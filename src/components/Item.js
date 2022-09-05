import React from "react";
import { Link } from "react-router-dom";

const Item = ({ s_no,img, title, brand, previousPrice, price, desc, category}) => {

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={img} style={{padding:"15px" ,width:"100%",
    maxWidth:"300px",maxHeight:"350px", position:"relative",border:"none"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="brand text-truncate">{brand}</h4>
                <Link to={`/product/${category}/${s_no}`}><h3 className="card-title text-truncate">{title}</h3></Link>
                    <hr/>
                    <div className="priceDiv d-flex flex-wrap">
                        <span className="price">{price}</span>
                        {(previousPrice!==undefined)?
                        <span className="prevPrice text-muted text-decoration-line-through">{previousPrice}</span>
                        :
                        <span></span>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Item;