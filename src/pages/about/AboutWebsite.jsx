import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import styles from './AboutWebsite.scss';

const AboutWebsite = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Header />
    </div>
    <Footer />
  </div>
);

export default AboutWebsite;
