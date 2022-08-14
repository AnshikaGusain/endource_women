import React from 'react'
import ArketCard from './ArketCard';
import {data} from './Arket_images'
import Footer from './Footer';
import Navbar from './Navbar';

export default function Arket() {
return (
  <div>
    <Navbar/>
    {data.map((val,i)=>{
      return(
        <ArketCard
        key={i}
        img_src={val.img_src}
        />
    ); 
    })};
    <Footer/>
  </div>
)
}