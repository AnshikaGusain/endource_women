const Product =({prod,link})=>{
    return (
        <div className="product">
            <div className="d-flex justify-content-around">
                <div className="img bg-light" ><img src={prod.img} className="p-15" alt="Fail to load"/></div>
                <div>
                    <div className="title p-3 m-4 w-100 text-decoration-underline"><h1>{prod.title}</h1></div>
                    <div className="brand p-1 m-2 w-100"><h3>Brand: {prod.brand}</h3></div>
                    <div className="price p-1 m-2 w-100"><h3>Price: £{prod.price}</h3></div>
                    <a href={link}><button className="btn btn-outline-info"><h4>Buy from {prod.brand}</h4></button></a>
                    </div>
            </div>
            <h2 className="text-decoration-underline">Description</h2>
            <div className="desc p-3 m-4 w-100 "><h4>{prod.desc}</h4></div>
        </div>
    );
}

export default Product;