import React from 'react';
import styles from './Header.scss';
import logo from 'assets/images/logo.png';

const Header = () => (
  <div className={styles.container}>
    <img src={logo} className={styles.logo} alt="logo" />
    <div className={styles.wrapper}>
      <div>Home</div>
      <div>Blogs</div>
      <div>Contact Me</div>
    </div>
  </div>  
)

export default Header;