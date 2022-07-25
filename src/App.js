import React, { Component } from "react";
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Category from './components/Category';
import Handpicked from './components/Handpicked';
import Footer from './components/Footer';
import Item from "./components/Item";
import './App.css';
import Filter from "./components/Filters";
import Product from "./components/Product";


const initial = {
  route: "home",
  data: [],
  brand:[],
  search:"",
  product:{},
  link:""
}



class App extends Component {
  constructor() {
    super();
    this.state = initial
  }

  getBrand=(data)=>{
      this.setState({brand:[...new Set(data.map(item=>item.brand))]});
  }

  onRouteChange = (r, data) => {
    this.setState({
      route: r,
      data: data
    })
    this.getBrand(data)
  }
  onSearch=(event)=>{
    this.setState({
      search:event.target.value
    })
  }
  onProduct=(product,result)=>{
    this.setState({
      route:"product",
      product:product,
      link:result
    })
  }

  render() {
    const {data,search}=this.state;
    const filtered=data.filter(item=>{
      return (item.title.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase()));
    });
    return (
      <div className="App" id="top">
        <Navbar onChange={this.onRouteChange} data={this.state}/>
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
        </div>
      </div>
    );
  }
}

export default App;
