import { useLocation } from "react-router-dom";
import { React,lazy,Suspense,useState,useEffect } from "react";
const Footer=lazy(()=>import('../components/Footer'));
const Navbar=lazy(()=>import('../components/Navbar'));
const Item = lazy(() => import('../components/Item'));

const PickedList = () => {
    const location = useLocation();
    const page = location.pathname.split("/")[1];
    const category = location.pathname.split("/")[2].toString().toLowerCase().replaceAll("%20", " ");
    const [data, setData] = useState([]);
    useEffect(()=>{
        const getData = async (category) => {
            const data = await (fetch(`https://endource-backend.herokuapp.com/${page}`, {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: category
                })
            }))
            const result = data.json();
            result.then(value => {
                setData(value);
            })
    
        }
        getData(category);
    },[category,page]);
    
    return (
        <div>
            <Suspense>
            <Navbar />
            {(data.length === 0)
                ?
                <div><h1 className="mt-2 mb-2 p-4  fw-bold">Loading...</h1></div>
                :
                <div>
                    <div style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {data.map((item, index) => {
                            return <Item s_no={item.s_no} img={item.img} title={item.title} brand={item.brand} brandLink={item.brandLink} desc={item.desc} price={item.price} titleLink={item.titleLink} key={index} previousPrice={item.previousprice} category="handpicked" />
                        })}
                    </Suspense>
                    </div>
                </div>}
            <Footer />
            </Suspense>
        </div>
    )
}
export default PickedList;