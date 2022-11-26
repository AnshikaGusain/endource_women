import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import Item from "../components/Item";
import {useState} from "react";



const ProductList=()=>{
    const location=useLocation();
    const category=location.pathname.split("/")[2].toString().replaceAll("%20","_");
    
    const [data,setData]=useState([]);
    const getData=async (category)=>{
        const data=await (fetch(`https://icube-backend.onrender.com/data/${category}`))
        const result=data.json();
        result.then(value=>{
            setData(value);
        })
        
    }
    getData(category);
    
    

    return(
        <div>
            <Navbar/>
            {(data.length===0)
            ?
            <div><h1 className="mt-2 mb-2 p-4 fw-bold">Loading...</h1></div>
            :
            <div>
            
            <div className="item_card" style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {data.map((item,index)=>{
                return <Item s_no={item.s_no} img={item.img} title={item.title} brand={item.brand} brandLink={item.brandLink} desc={item.desc} price={item.price} titleLink={item.titleLink} key={index} category={category} previousPrice={item.previousprice}/>
            })}
            </div>
            </div>
            }
            <Footer/>
        </div>
    )
}
export default ProductList;