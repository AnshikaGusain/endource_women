const Prod =({prod})=>{
    return (
        <div className="product container-fluid">
            <div className="d-flex flex-wrap justify-content-around container-fluid">
                <div className="img bg-light" style={{width:"25rem", height:"30rem"}} ><img src={prod.img} width="100%" height="100%" className="p-15" alt="Fail to load"/></div>
                <div>
                    <div className="title p-3 m-4 w-100 text-decoration-underline"><h1>{prod.title}</h1></div>
                    <div className="brand p-1 m-2 w-100"><h3>Brand: {prod.brand}</h3></div>
                    <div className="price p-1 m-2 w-100"><h3>Price: {prod.price}</h3></div>
                    <button className="btn btn-outline-info"><h4>Buy from {prod.brand}</h4></button>
                    </div>
            </div>
            <h2 className="text-decoration-underline m-4">Description</h2>
            <div className="desc p-3 m-4 w-100 "><h4>{prod.description}</h4></div>
        </div>
    );
}

export default Prod;