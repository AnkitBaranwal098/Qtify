import React from "react";
import styles from "./CardTile.module.css";
import Card from "../Card/Card";
const CardTile = () => {
  return (
    <div className={styles.cardTile}>
      <div>
        <Card />
      </div>
      <div className={styles.tileName}>
        <h4>New Bollywood</h4>
      </div>
    </div>
  );
};

export default CardTile;
