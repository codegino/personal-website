import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/Hero';
import Interests from 'components/interests/Interests';
import styles from './HomePage.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Header />
    <Hero />
    <Interests />
    <Footer />
  </div>
);

export default HomePage;
