import { React,lazy,Suspense } from 'react';
const Category =lazy(()=>import('../components/Category'));
const Footer=lazy(()=>import('../components/Footer'));
const Navbar=lazy(()=>import('../components/Navbar'));

const Home=()=>{
    return (
        <div>
            <Suspense>
            <Navbar/>
            <Category type="home"/>
            <Footer/>
            </Suspense>
        </div>
    )
}

export default Home;