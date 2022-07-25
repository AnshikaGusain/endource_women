import React from "react";

const Item = ({ img, title, titleLink, brand, brandLink, price, desc,onProduct }) => {
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
    let prod={
        title:title,
        price:pr,
        desc:desc,
        img:img,
        brand:brand,
        brandLink:brandLink,
        link:''
    }
    const product=()=>{
        fetch("https://endource-backend.herokuapp.com/link",{
            method:'Post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                title:title
            })
        })
        .then(res=>res.json())
        .then(result=>onProduct(prod,result))
       
    }
    return (
        <div>
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
                <img src={img} style={{padding:"15px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6>BRAND: {brand}</h6>
                    <h6>PRICE: £{pr}</h6>
                    <div><span className="card-link" role="button" onClick={product}>View Product</span></div>
                    <div><a href={brandLink} className="card-link">View Brand</a></div>
                </div>
            </div>
            {/* <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
            </div> */}
        </div>
    );
}

export default Item;