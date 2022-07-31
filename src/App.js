import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from "./pages/Product";
import PickedList from "./pages/PickedList";
import './App.css';


class App extends Component {
  
  render() {
    
    return (
      <div className="App" id="top">
        
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products/:item" element={<ProductList/>}/>
            <Route path="/product/:category/:title" element={<Product/>}/>
            <Route path="/handpicked/:category" element={<PickedList/>}/>
            {/* <Route path="/handpicked/:category/:title" element={<Picked/>}/> */}
          </Routes>
        </Router>
        
      </div>
    );
  }
}

export default App;
