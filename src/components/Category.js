import React, { useState, useEffect } from "react";
import Card from "./Card";
import {Link} from "react-router-dom";

const Category =({type})=> {
    const [category,setCategory]=useState([]);
    const getData=(type)=>{
        fetch("https://endource-backend.herokuapp.com/category", {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: type
            })
        })
        .then(data=>data.json())
        .then(value=>{
            setCategory(value);
        })
        
    }
    useEffect(()=>{
        getData(type);
    },[type])
        return (
            <div className="mt-2 mb-2 p-4 category">
                <div><h4>Shop By Category</h4></div>
                <div className="categoryDiv" style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {category.map((i, index) => {
                        return <div key={index}>
                            <Link to={`/products/${i.title.toLowerCase()}`}>
                                <Card title={i.title} img={i.img} key={index} />
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        );
    
}

export default Category;