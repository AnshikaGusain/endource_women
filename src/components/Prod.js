import { useEffect, useState } from "react";

const Prod = ({ prod }) => {
    const [imgs, setImgs] = useState([]);
    useEffect(() => {
        if (prod.imgs) {
            setImgs(prod.imgs);
        }
    }, [prod, imgs]);
    return (
        <div className="product container-fluid">
            <div className="d-flex flex-wrap justify-content-around container">
                <div className="col-md-4">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            {imgs.map?.((item, index) => {
                                
                                    return <button type="button" data-bs-target="#carouselExampleIndicators" style = {{ filter : 'invert(1)' }} data-bs-slide-to={index} className="active"  aria-label={`Slide ${index + 1}`} key={index}></button>
                                
                            })}
                        </div>
                        <div className="carousel-inner">
                            {imgs.map?.((item, index) => {
                                return <div className= {`carousel-item ${index === imgs.length -1 ?"active" : ""}`} key={index}>
                                    <img src={item} className="d-block w-100" alt="Failed to load" />
                                </div>
                            })}
                        </div>
                        <button  className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" style = {{ filter : 'invert(1)' }} aria-hidden="true"></span>
                            <span className="visually-hidden" style = {{ filter : 'invert(1)' }}>Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" style = {{ filter : 'invert(1)' }} aria-hidden="true"></span>
                            <span className="visually-hidden" style = {{ filter : 'invert(1)' }}>Next</span>
                        </button>
                    </div>
                </div>
                <div className="text-center align-self-center">
                    <div className="title p-1 m-4 text-decoration-underline"><h1>{prod.title}</h1></div>
                    <div className="brand p-1 m-2 text-center"><h3>Brand: {prod.brand}</h3></div>
                </div>
            </div>
            <h2 className="text-decoration-underline m-4">Description</h2>
            <div className="p-1 m-2">{prod.description}</div>
        </div>
    );
}

export default Prod;