import React from "react";
import styles from "./NavBar.module.css";
import Search from "../SearchBar/Search";

const NavBar = ({ cardData }) => {
  return (
    <nav className={styles.navbar}>
      <Search placeholder="Search by title or description" data={cardData} />
    </nav>
  );
};

export default NavBar;
