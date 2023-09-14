import React from "react";
import styles from "./Hero.module.css";
import Slogan from "../Hero-Text/Slogan";
import Logo from "../Logo/Logo";
import Icon from "../../assets/vibrating-headphone 1.png"
const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.sloganContainer}>
        <Slogan />
      </div>
      <div className={styles.logo}>
        <Logo Icon={Icon} width={212} height={212} />
      </div>
    </div>
  );
};

export default Hero;
