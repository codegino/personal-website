import React from 'react';
import MyLogo from 'assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import MultiLink from './MultiLink';
import styles from './Header.scss';

const Header = () => {
  const links = [
    { title: 'About Me', to: '/about-me' },
    { title: 'About this Site', to: '/about-website' },
  ];

  return (
    <header className={styles.container}>
      <NavLink exact to="/">
        <MyLogo className={styles.logo} width={20} height={20} />
      </NavLink>
      <nav className={styles.wrapper}>
        <ul className={styles.links}>
          <li>
            <NavLink exact activeClassName={styles.link__active} className={styles.link} to="/">
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.link__active} className={styles.link} to="/resume">
              <p>Resume</p>
            </NavLink>
          </li>
          <li>
            <MultiLink className={styles.multiLink} title="About" links={links}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
