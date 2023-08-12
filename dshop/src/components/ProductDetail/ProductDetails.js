import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function ProductDetail({ match }) {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data using Axios
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
        console.log(product);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product data.</div>;
  }

  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div>
      <Row>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate}</p>
          <p>Total number of rating: {product.rating.count}</p>
          {/* Add your form components here */}
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
