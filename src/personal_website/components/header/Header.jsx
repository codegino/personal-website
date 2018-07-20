import React from 'react';
import MyLogo from 'personal_website/assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import MultiLink from './MultiLink';
import styles from './Header.scss';

const Header = (props: { className: Object }) => {
  const { className } = props;
  const links = [
    { title: 'About Me', to: '/about-me' },
    { title: 'About this Site', to: '/about-website' },
  ];

  return (
    <header className={`${styles.container} ${className}`}>
      <NavLink exact to="/">
        <MyLogo className={styles.logo} width={20} height={20} />
      </NavLink>
      <nav className={styles.wrapper}>
        <ul className={styles.links}>
          <li>
            <NavLink exact activeClassName={styles.link__active} className={styles.link} to="/">
              <p className={styles.link}>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.link__active} className={styles.link} to="/resume">
              <p className={styles.link}>Resume</p>
            </NavLink>
          </li>
          <li>
            <MultiLink className={styles.multiLink} title="ABOUT" links={links} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
