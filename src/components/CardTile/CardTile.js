import React from "react";
import styles from "./CardTile.module.css";
import Card from "../Card/Card";
const CardTile = ({song}) => {

  const {image, follows, title} = song;

  return (
    <div className={styles.cardTile}>
      <div>
        <Card image={image} follows={follows} />
      </div>
      <div className={styles.tileName}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default CardTile;
