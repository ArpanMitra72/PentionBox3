import React from "react";
import { Form } from "react-bootstrap";

function CategoryDropdown({ onCategoryPriceChange }) {
  const handleCategoryChange = (event) => {
    onCategoryPriceChange(event.target.value);
  };

  return (
    <div>
      <div>Price Range</div>
      <Form>
        <Form.Group controlId="categorySelect">
          <Form.Control as="select" onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="0-200">$0 - $200</option>
            <option value="200-500">$200 - $500</option>
            <option value="500-1000">$500 - $1000</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CategoryDropdown;
