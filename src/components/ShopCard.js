import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ShopCard(props) {
  return (
<>
<div className="container-fluid my-4">
  <div className="row">
    <div className="col-sm">
      <img className="img-fluid" src={props.img1} alt = "Not available"/>
      <h5>{props.title1}</h5>
    </div>
    <div className="col-sm">
    <img className="img-fluid" src={props.img2} alt = "Not available"/>
      <h5>{props.title2}</h5>
    </div>
    <div className="col-sm">
    <img className="img-fluid" src={props.img3} alt = "Not available"/>
      <h5>{props.title3}</h5>
    </div>
  </div>
  <div className="row">
  <button type="button" className="btn btn-outline-dark container my-4" style={{width:"10rem", color:"black", borderRadius: "0"}}>SEE  THEM ALL</button>
  </div>
</div>
</>
  );
}
