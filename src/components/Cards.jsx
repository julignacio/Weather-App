import React from "react";
import styles from "./Cards.module.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose, bkgFunction }) {
  if (cities.length) {
    return (
      <div className={styles.cards}>
        {cities.map((c) => {
          return (
            <Card
              key={c.id + c.name}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(`card${c.id}`)}
              id={c.id}
              bkgFunction={bkgFunction}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.cards}>
        {" "}
        <div className={styles.instructions}>
          <h4>There is no cities yet</h4>
          <div>
            <h6>Try to search yours!</h6>
          </div>
        </div>{" "}
      </div>
    );
  }
}
