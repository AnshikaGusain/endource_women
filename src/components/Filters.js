import React from "react";

const Filter = ({brands,search,data}) =>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Filters</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item m-2">
                                <div><label htmlFor="brand">Brand</label></div>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="brand" onChange={search}>
                                    {brands.map(item=><option value={item} key={item}>{item}</option>
                                    )}
                                </select>
                            </li>                           
                        </ul>
                        <div className="m-2 p-2">
                            <div ><label htmlFor="brand">Search Items</label></div>
                            <div><input type="search" placeholder="Search" aria-label="Search" onChange={search} /></div>
                        </div>  
                        <div className="m-2 p-2">
                        <a href="/"><button className="btn btn-outline-info">Back</button></a>  
                        </div>          
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Filter;