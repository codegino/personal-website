import React, { Component } from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/Hero';
import Skills from 'components/skills/Skills';
import Interests from 'components/interests/Interests';
import styles from './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Hero />
        <Skills />
        <Interests />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
