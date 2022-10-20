import React,{lazy,Suspense} from 'react';
import {data} from './Arket_images'
const ArketCard=lazy(()=>import('./ArketCard'));
const Footer=lazy(()=>import('../components/Footer'));
const Navbar=lazy(()=>import('../components/Navbar'));

export default function Arket() {
return (
  <div>
    <Suspense>
    <Navbar/>
    {data.map((val,i)=>{
      return(
        <ArketCard
        key={i}
        img_src={val.img_src}
        />
    ); 
    })}
    <Footer/>
    </Suspense>
  </div>
)
}