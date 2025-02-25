import React from "react";
import HomePage from "./page/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./page/ProductDetail";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/product-detail" element={<ProductDetail />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
