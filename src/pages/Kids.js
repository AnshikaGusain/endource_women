import { React,lazy,Suspense } from 'react';
const Category =lazy(()=>import('../components/Category'));
const Footer=lazy(()=>import('../components/Footer'));
const Navbar=lazy(()=>import('../components/Navbar'));

const Kids=()=>{
    return(
        <div>
            <Suspense>
            <Navbar/>
            <Category type="kids"/>
            <Footer/>
            </Suspense>
        </div>
    )
}

export default Kids;