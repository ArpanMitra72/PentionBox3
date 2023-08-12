import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

function Search({ placeholder, data, onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearchResults(filteredResults);
  };

  return (
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
  );
}

export default Search;
