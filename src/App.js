import React, { Component,lazy,Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
const Women = lazy(()=>import('./pages/Women'));
const Kids = lazy(()=>import('./pages/Kids'));
const Home = lazy(()=>import('./pages/Home'));
const ProductList = lazy(()=>import('./pages/ProductList'));
const Product = lazy(()=>import("./pages/Product"));
const PickedList = lazy(()=>import("./pages/PickedList"));
const SummerShop = lazy(()=>import("./components/SummerShop"));
const Arket = lazy(()=>import("./components/Arket"));
const Wonder = lazy(()=>import("./components/Wonder"));
const Landing = lazy(()=>import("./pages/Landing"));

class App extends Component {
  
  render() {
    
    return (
      <div className="App" id="top">
        <Suspense>

        <Router>
          <Routes>
          <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/Women" element={<Women/>}/>
            <Route exact path="/Kids" element={<Kids/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route path="/products/:item" element={<ProductList/>}/>
            <Route path="/product/:category/:s_no" element={<Product/>}/>
            <Route path="/handpicked/:category" element={<PickedList/>}/>
            <Route path="/SummerShop" element={<SummerShop/>}/>
            <Route path="/Arket" element={<Arket/>}/>
            <Route path="/Wonder" element={<Wonder/>}/>
          </Routes>
        </Router>
        
        </Suspense>
      </div>
    );
  }
}

export default App;
