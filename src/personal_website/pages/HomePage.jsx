import React from 'react';
import Header from 'personal_website/components/header/Header';
import Footer from 'personal_website/components/footer/Footer';
import Banner from 'personal_website/components/banner/HomeBanner';
import styles from './HomePage.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Header className={styles.header}/>
    <Banner />
    <Footer />
  </div>
);

export default HomePage;
