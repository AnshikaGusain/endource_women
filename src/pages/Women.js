import { React,lazy,Suspense } from 'react';

const Category =lazy(()=>import('../components/Category'));
const Footer=lazy(()=>import('../components/Footer'));
const Navbar=lazy(()=>import('../components/Navbar'));
const Handpicked =lazy(()=>import('../components/Handpicked'));
const Slider =lazy(()=>import('../components/Slider'));


const Women=()=>{
    return(
        <div>
            <Suspense>
                <Navbar/>
                <Slider/>
                <Category type="women"/>
                <Handpicked/>
                <Footer/>
            </Suspense>
        </div>
    )
}

export default Women;