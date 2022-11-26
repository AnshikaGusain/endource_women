import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Prod from "../components/Prod";
import HandpickedProd from "../components/HandpickedProd";

const Product = () => {
    const [prod, setProd] = useState({});
    const location = useLocation();
    const category = location.pathname.split("/")[2].toString().replaceAll("%20", " ");
    const s_no = location.pathname.split("/")[3].toString().replaceAll("%20", " ");
    useEffect(() => {
        const getProduct = async () => {
            const product = await fetch("https://icube-backend.onrender.com/link", {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    s_no: s_no,
                    category: category
                })
            });
            const result = product.json();
            result.then(value => {
                let imgs=value.imgs.split(' ');
                value.imgs=imgs;
                setProd(value);
            })

        }
        getProduct();
    }, [s_no, category])
    return (
        <div>
            <Navbar />
            {category === "handpicked" ? <HandpickedProd prod={prod} imgs={prod.imgs} /> : <Prod prod={prod} />}
            <Footer />
        </div>
    )
}

export default Product;