import React from "react";
import styles from "./Slogan.module.css";
const Slogan = () => {
  return (
    <div className={styles.sloganWrapper}>
      <div className={styles.firstSlogan}>
        <h2>100 Thousand Songs, ad-free</h2>
      </div>
      <div className={styles.secondSlogan}>
        <h2>Over thousands podcast episodes</h2>
      </div>
    </div>
  );
};

export default Slogan;
