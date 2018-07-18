import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import styles from './AboutMe.scss';

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Header />
    </div>
    <div>
      <h1>
        About Me
      </h1>
      <h2>
        This page is under construction!
      </h2>
    </div>
    <Footer />
  </div>
);

export default AboutMe;
