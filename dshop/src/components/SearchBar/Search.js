import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

function Search({ placeholder, data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cardDataNew, setCardDataNew] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCardDataNew(filteredResults);
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSearch}>
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
        <input
          className={styles.search}
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {searchResults.map((result) => (
            <div key={result.id} className={styles.searchResultItem}>
              {/* Render your search result item here */}
              <p>{result.title}</p>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
