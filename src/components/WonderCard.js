import React from "react";

export default function WonderCard(props) {
  return (
      <div class="card mx-4 my-4" style={{width: "18rem"} }>
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.brand}</h5>
          <p class="card-text" style={{height: "3rem"} }>{props.title}</p>
        </div >
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{props.price}</li>
          <button type="button" className="btn btn-info">Buy Now</button>
        </ul>        
      </div>
  );
}
