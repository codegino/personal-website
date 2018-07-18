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
      About Me
    </div>
    <Footer />
  </div>
);

export default AboutMe;
