import React from "react";
import styles from "./Card.module.css";
import CardImage from "../Card_Image/CardImage";
const Card = ({image, follows}) => {
  
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <CardImage imgSrc={image} width={159} height={170} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.pill}>
          <h5>{follows} Follows</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
