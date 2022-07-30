import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import Item from "../components/Item";
import {useState} from "react";


const ProductList=()=>{
    const [data,setData]=useState([]);
    const getData=async (category)=>{
        const data=await (fetch(`https://endource-backend.herokuapp.com/data/${category}`))
        const result=data.json();
        result.then(value=>{
            setData(value);
        })
    }
    const location=useLocation();
    const category=location.pathname.split("/")[2].toString();
    getData(category);
    return(
        <div>
            <Navbar/>
            <div style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {data.map((item,index)=>{
                return <Item img={item.img} title={item.title} brand={item.brand} brandLink={item.brandLink} desc={item.desc} price={item.price} titleLink={item.titleLink} key={index} category={category}/>
            })}
            </div>
            <Footer/>
        </div>
    )
}
export default ProductList;