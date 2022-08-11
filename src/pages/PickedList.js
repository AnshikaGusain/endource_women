import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import Item from "../components/Item";
import {useState} from "react";
import Filter from "../components/Filters";


const PickedList=()=>{
    const location=useLocation();
    const category=location.pathname.split("/")[2].toString().toLowerCase().replaceAll("%20"," ");
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const getData=async (category)=>{
        const data=await (fetch(`https://endource-backend.herokuapp.com/handpicked`,{
            method:'Post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                category:category
            })
        }))
        const result=data.json();
        result.then(value=>{
            setData(value);
        })
        
    }
    getData(category);
    
    const onSearch=(event)=>{
        setSearch(event.target.value)
    }
    const brand=[...new Set(data.map(item=>item.brand))];
    const filtered=data.filter(item=>{
      return (item.title.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase()));
    });


    return(
        <div>
            <Navbar/>
            <Filter brand={brand} search={onSearch}/>
            <div style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {filtered.map((item,index)=>{
                return <Item img={item.img} title={item.title} brand={item.brand} brandLink={item.brandLink} desc={item.desc} price={item.price} titleLink={item.titleLink} key={index} category="handpicked"/>
            })}
            </div>
            <Footer/>
        </div>
    )
}
export default PickedList;