import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./containers/Header";
import '../src/App.css'
import ImageComponent from './containers/ImageComponent'
import ProductListing from './containers/ProductListing'
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        
        <Routes>
       
          <Route path="/Fake-shoppings/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
