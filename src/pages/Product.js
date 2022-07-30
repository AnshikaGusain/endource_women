import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom"; 
import { useState } from "react"; 
import Prod from "../components/Prod";

const Product=()=>{
    const [prod,setProd]=useState({});
    const getProduct=async ()=>{
        const product= await fetch("https://endource-backend.herokuapp.com/link",{
            method:'Post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                title:title,
                category:category
            })
        });
        const result=product.json();
        result.then(value=>{
            setProd(value);
            // console.log(value);
        })
        
    }

    const location=useLocation();
    const category=location.pathname.split("/")[2].toString().replaceAll("%20"," ");
    const title=location.pathname.split("/")[3].toString().replaceAll("%20"," ");
    
    // console.log(category,title);
    // console.log(title);
    getProduct();
    return(
        <div>
            <Navbar/>
            <Prod prod={prod}/>
            <Footer/>
        </div>
    )
}

export default Product;