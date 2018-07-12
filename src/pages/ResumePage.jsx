import React, { Component } from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/Hero';
import Skills from 'components/skills/Skills';
import styles from './ResumePage.scss';

class ResumePage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Hero />
        <div className={styles.skills}>
          <Skills/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ResumePage;
