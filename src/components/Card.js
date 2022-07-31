import React, { useState } from "react";

const Card = ({ title, img}) => {
    return (
        <div >
            <div className="card" style={{ width: "18rem", margin: "10px" ,padding:"15px"}}>
                <img src={img} className="card-img-top" alt="Fail to load" />
                <div className="card-body">
                    <span className="btn btn-dark" ><h5 className="card-title text-white" >{title}</h5></span>
                </div>
            </div>
        </div>
    );
}

export default Card;