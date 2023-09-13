import React from "react";
import styles from "./Button.module.css";
const Button = ({ children }) => {

    console.log(children)

    return (
      <button className={styles.btn}>
            {children}
      </button>
    );
};

export default Button;
