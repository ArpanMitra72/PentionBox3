import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "../MainBody/MainBody.module.css";
import SortDropdown from "../Sort/Sort";
import ProductDetail from "../ProductDetail/ProductDetails";
import CategoryDropdown from "../Category/CategoryDropdown";
import CategoryPriceDropDown from "../Category/CategoryPriceDropDown";
import Search from "../SearchBar/Search";
import styles from "./MainBody.module.css";

function MainBody() {
  const [cardData, setCardData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [ratingSortOrder, setRatingSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceCategory, setSelectedCategoryPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const sorted = response.data.slice(); // Create a copy of the data array

        if (sortOrder === "highToLow") {
          sorted.sort((a, b) => b.price - a.price);
        } else if (sortOrder === "lowToHigh") {
          sorted.sort((a, b) => a.price - b.price);
        }

        if (ratingSortOrder === "highToLower") {
          sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        } else if (ratingSortOrder === "lowToHigher") {
          sorted.sort((a, b) => a.rating.rate - b.rating.rate);
        }
        setCardData(sorted);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, [sortOrder, ratingSortOrder, selectedCategory, selectedPriceCategory]);

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
    setRatingSortOrder("");
  };

  const handleRatingSortChange = (newRatingSortOrder) => {
    setRatingSortOrder(newRatingSortOrder);
    setSortOrder("");
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory.toLowerCase());
  };

  const handleCategoryPriceChange = (newCategoryPrice) => {
    setSelectedCategoryPrice(newCategoryPrice);
  };

  const handleSearchResults = (results) => {
    setCardData(results);
    setSearchTerm(""); // Clear searchTerm when search is performed
  };

  const renderCards = () => {
    if (selectedCategory) {
      return cardData
        .filter(
          (product) => product.category.toLowerCase() === selectedCategory
        )
        .map((product) => <ProductCard key={product.id} product={product} />);
    } else if (selectedPriceCategory) {
      const [minPrice, maxPrice] = selectedPriceCategory.split("-").map(Number);

      return cardData
        .filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        )
        .map((product) => <ProductCard key={product.id} product={product} />);
    } else if (searchTerm) {
      // Add this condition for search results
      return cardData
        .filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((product) => <ProductCard key={product.id} product={product} />);
    } else {
      return cardData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} className={styles.sidebar}>
          <div className={styles.searchBar}>
            <Search
              placeholder="Search by name or description"
              data={cardData}
              onSearchResults={handleSearchResults}
            />
          </div>
          <div className={styles.filterSection}>
            <SortDropdown
              onSortChange={handleSortChange}
              onRatingSortChange={handleRatingSortChange}
            />
            <CategoryDropdown onCategoryChange={handleCategoryChange} />
            <CategoryPriceDropDown
              onCategoryPriceChange={handleCategoryPriceChange}
            />
          </div>
        </Col>
        <Col md={9}>
          <Container className={styles.mainContent}>
            <Row className="product-card-row">{renderCards()}</Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBody;
