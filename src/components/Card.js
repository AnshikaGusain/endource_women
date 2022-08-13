import React from "react";

const Card = ({ title, img}) => {
    return (
        <div >
            <div className="card" style={{ margin: "10px" ,padding:"15px"}}>
                <img src={img} style={{width:"15rem", height:"18rem"}}className="card-img-top" alt="Fail to load" />
                <div className="card-body">
                    <span className="btn button" ><h5 className="card-title" >{title}</h5></span>
                </div>
            </div>
        </div>
    );
}

export default Card;