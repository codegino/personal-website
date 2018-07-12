import React from 'react';
import styles from './Header.scss';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom'

const Header = () => (
  <header className={styles.container}>
    <img src={logo} className={styles.logo} alt="logo" />
    <nav className={styles.wrapper}>
      <ul className={styles.links}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;