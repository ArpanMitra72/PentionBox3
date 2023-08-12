import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MainBody from "./components/MainBody/MainBody";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductDetails from "./components/ProductDetail/ProductDetails";

function App() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  return (
    <Router>
      <React.Fragment>
        <NavBar cardData={cardData} />
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
