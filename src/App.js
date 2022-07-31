import React, { Component } from "react";
// import Navbar from './components/Navbar';
// import Slider from './components/Slider';
// import Category from './components/Category';
// import Handpicked from './components/Handpicked';
// import Footer from './components/Footer';
// import Item from "./components/Item";
// import Filter from "./components/Filters";
// import Product from "./components/Product";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from "./pages/Product";
import Picked from "./pages/Picked";
import './App.css';


class App extends Component {
  
  render() {
    
    return (
      <div className="App" id="top">
        {/* <Navbar/>
        {this.state.route === "home" ?
          <div>
            <Slider />
            <Category onChange={this.onRouteChange} />
            <Handpicked />
          </div>
          :
          <div>
            {this.state.route==="category"?
          <div>
            <div>
              <Filter brands={this.state.brand} search={this.onSearch} data={this.state.data}/>
            </div>
            <div style={{ background: "linear-gradient(to right, rgb(64, 181, 179), rgb(60, 69, 88))" }}>
              <div style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {filtered.map((i, index) => {
                  return <div key={index}>
                    <Item img={i.img} title={i.title} titleLink={i.title_link} brand={i.brand} brandLink={i.brand_link} price={i.price} desc={i.description} key={index} onProduct={this.onProduct}/>
                  </div>
                })}
              </div>
            </div>
          </div>
          :
          <div>
            <Product prod={this.state.product} link={this.state.link}/>
          </div>
          }
          </div>}
        <Footer />
        <div className="backtop">
          <a id="button" href="#top" className="btn btn-lg btn-outline-dark fixed-bottom" style={{backgroundColor: "white", width: "50px", height: "50px"}} role="button">
            <i className="fas fa-chevron-up text-dark"></i>
          </a>
        </div> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products/:item" element={<ProductList/>}/>
            <Route path="/product/:category/:title" element={<Product/>}/>
            <Route path="/handpicked/:category" element={<Picked/>}/>
          </Routes>
        </Router>
        
      </div>
    );
  }
}

export default App;
