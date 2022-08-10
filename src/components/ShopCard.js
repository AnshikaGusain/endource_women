import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ShopCard(props) {
  return (
<>
<div class="container my-4">
  <div class="row">
    <div class="col-sm">
      <img src={props.img1} alt = "Not available"/>
      <h5>{props.title1}</h5>
    </div>
    <div class="col-sm">
    <img src={props.img2} alt = "Not available"/>
      <h5>{props.title2}</h5>
    </div>
    <div class="col-sm">
    <img src={props.img3} alt = "Not available"/>
      <h5>{props.title3}</h5>
    </div>
  </div>
  <div class="row">
  <button type="button" class="btn btn-outline-dark container my-4" style={{width:"10rem", color:"black", borderRadius: "0"}}>SEE  THEM ALL</button>
  </div>
</div>
</>
  );
}
