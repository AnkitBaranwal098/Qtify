import React from 'react'
import styles from "./Navbar.module.css";
import Button from '../Button/Button';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Icon from "../../assets/Group 1.png"
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo Icon={Icon} width={67}/>
      <Search/>
      <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar