import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className={styles.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.inputSearch}
        />
        <input type="submit" value="Agregar" className={styles.boton} />
      </form>
    </div>
  );
}
