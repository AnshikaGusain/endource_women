import React from 'react'


export default function ArketCard(props) {
  return (
    <div className="conatiner m-4">
      <img className="img-fluid" src={props.img_src} alt="Not available"/>
    </div>
  )
}