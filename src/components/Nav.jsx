import React from "react";
import Logo from "../img/logo.png";
import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>
        <div className={styles.logo}>
          <img src={Logo} alt="Weather Logo" />
          <span> Henry - Weather App </span>
        </div>
      </Link>
      <Link to="/about" className={styles.link}>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
