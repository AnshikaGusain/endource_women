import { useEffect, useState } from "react";

const HandpickedProd = ({ prod }) => {
    const [imgs,setImgs]=useState([]);
    useEffect(()=>{
        if(prod.imgs){
            setImgs(prod.imgs);

        }
    },[prod,imgs]);

    return (
        <div className="product container-fluid">
            <div className="d-flex flex-wrap justify-content-around container">
                <div className="col-md-4">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            {imgs.map?.((item, index) => {
                                return <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`} key={index}></button>
                            })}
                        </div>
                        <div className="carousel-inner">
                            {imgs.map?.((item, index) => {
                                return <div className="carousel-item active " key={index}>
                                <img src={item} className="d-block w-100" alt="Failed to load" />
                            </div>
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="title p-3 m-4 w-100 text-decoration-underline"><h1>{prod.title}</h1></div>
                    <div className="brand p-1 m-2 w-100"><h3>Brand: {prod.brand}</h3></div>
                    <div className="price p-1 m-2 w-100"><h3>Price: £{prod.price}</h3></div>
                    <button className="btn btn-outline-info"><h4>Buy from {prod.brand}</h4></button>
                </div>
            </div>
            <h2 className="text-decoration-underline m-4">Description</h2>
            <div className="desc p-3 m-4 w-100 "><h4>{prod.description}</h4></div>
        </div>
    );
}

export default HandpickedProd;