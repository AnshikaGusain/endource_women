import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Women from './pages/Women';
import Kids from './pages/Kids';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from "./pages/Product";
import PickedList from "./pages/PickedList";
import SummerShop from "./components/SummerShop"
import Arket from "./components/Arket"
import Wonder from "./components/Wonder";
import Landing from "./pages/Landing";
import './App.css';



class App extends Component {
  
  render() {
    
    return (
      <div className="App" id="top">
        
        <Router>
          <Routes>
          <Route exact path="/" element={<Landing/>}/>
            {/* <Route exact path="/Women" element={<Women/>}/>
            <Route exact path="/Kids" element={<Kids/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route path="/products/:item" element={<ProductList/>}/>
            <Route path="/product/:category/:s_no" element={<Product/>}/>
            <Route path="/handpicked/:category" element={<PickedList/>}/>
            <Route path="/SummerShop" element={<SummerShop/>}/>
            <Route path="/Arket" element={<Arket/>}/>
            <Route path="/Wonder" element={<Wonder/>}/> */}

          </Routes>
        </Router>
        
      </div>
    );
  }
}

export default App;
