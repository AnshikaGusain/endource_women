import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ShopCard(props) {
  return (
<>
<div className="container-fluid my-4">
  <div className="row">
    <div className="col-sm">
      <img className="img-fluid m-3" src={props.img1} alt = "Not available"/>
      <h5 className="text-black">{props.title1}</h5>
    </div>
    <div className="col-sm">
    <img className="img-fluid m-3" src={props.img2} alt = "Not available"/>
      <h5 className="text-black">{props.title2}</h5>
    </div>
    <div className="col-sm">
    <img className="img-fluid m-3" src={props.img3} alt = "Not available"/>
      <h5 className="text-black">{props.title3}</h5>
    </div>
  </div>
  <div className="row">
  <Link to={`/${props.link}/${props.category.toLowerCase()}`}>
    <button type="button" className="btn btn-outline-dark container my-4 shopCardButton" style={{width:"10rem",  borderRadius: "0"}} >SEE  THEM ALL</button>
  </Link>
  </div>
</div>
</>
  );
}
