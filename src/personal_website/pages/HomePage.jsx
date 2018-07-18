import React from 'react';
import Header from 'personal_website/components/header/Header';
import Footer from 'personal_website/components/footer/Footer';
import Banner from 'personal_website/components/banner/HomeBanner';
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
