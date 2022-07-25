import React, { useState } from "react";

const Card = ({ title, img, url, onChange }) => {
    const [Title, setTitle] = useState(title);
    const onSubmit = () => {
        setTitle(title);
        fetch(`https://endource-backend.herokuapp.com/data/${Title.toLowerCase()}`,{
        }).then(res => res.json())
            .then(user => {
                onChange("category",user);
            });
    }
    return (
        <div >
            <div className="card" style={{ width: "18rem", margin: "10px" ,padding:"15px"}}>
                <img src={img} className="card-img-top" alt="Fail to load" />
                <div className="card-body">
                    <a href={url} className="btn btn-dark" onClick={onSubmit}><h5 className="card-title text-white" >{title}</h5></a>
                </div>
            </div>
        </div>
    );
}

export default Card;