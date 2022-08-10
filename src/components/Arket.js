import React from 'react'
import ArketCard from './ArketCard';
import {data} from './Arket_images'

export default function Arket() {
return (
  <div>
    {data.map((val,i)=>{
      return(
        <ArketCard
        key={i}
        img_src={val.img_src}
        />
    ); 
    })};
  </div>
)
}