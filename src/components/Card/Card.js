import React from "react";
import styles from "./Card.module.css";
import CardImage from "../Card_Image/CardImage";
import imgSrc from "../../assets/Rectangle 2138.png";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className="cardImage">
        <CardImage imgSrc={imgSrc} width={159} height={170} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.pill}>
          <h5>100 Follows</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
