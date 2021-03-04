import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className={styles.search}>
      <form
        onSubmit={(e) => {
          console.log(city);
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          type="text"
          placeholder="City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.inputSearch}
        />
        <input type="submit" value="Add" className={styles.boton} />
      </form>
    </div>
  );
}
