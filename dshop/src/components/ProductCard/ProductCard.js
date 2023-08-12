import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <Col md={4} style={{ marginBottom: "20px" }}>
      <Card
        className={`product-card ${styles["product-card"]}`}
        onClick={handleClick}
      >
        <Card.Img
          className={`product-image ${styles["product-image"]}`}
          variant="top"
          src={product.image}
        />
        <Card.Body
          className={`product-description ${styles["product-description"]}`}
        >
          <Card.Title>{product.category}</Card.Title>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.rating.rate}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
