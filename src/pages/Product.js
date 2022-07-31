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
    const title = location.pathname.split("/")[3].toString().replaceAll("%20", " ");
    useEffect(() => {
        const getProduct = async () => {
            const product = await fetch("https://endource-backend.herokuapp.com/link", {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    category: category
                })
            });
            const result = product.json();
            result.then(value => {
                let p = value.price.split('');
                let imgs=value.imgs.split(' ');
                // console.log(imgs);
                value.imgs=imgs;
                p.shift();
                let i = 0, pr = [];
                for (i = 0; i < p.length; i++) {
                    if (p[i] === " ") {
                        break;
                    }
                    else if (p[i] === ',') {
                        continue;
                    }
                    else {
                        pr[i] = p[i]
                    }
                }
                value.price=pr.join("")
                setProd(value);
                
            })

        }
        getProduct();
    }, [title, category])
    return (
        <div>
            <Navbar />
            {category === "handpicked" ? <HandpickedProd prod={prod} imgs={prod.imgs} /> : <Prod prod={prod} />}

            <Footer />
        </div>
    )
}

export default Product;