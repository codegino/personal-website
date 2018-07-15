import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Banner from 'components/banner/HomeBanner';
import styles from './HomePage.scss';

const HomePage = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.banner}>
      <Banner />
    </div>
    <Footer />
  </div>
);

export default HomePage;
