import React from "react";
import { Form } from "react-bootstrap";

function CategoryDropdown({ onCategoryChange }) {
  return (
    <Form.Group>
      <Form.Label>Category</Form.Label>
      <Form.Control
        as="select"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CategoryDropdown;
