import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/Hero';
import Skills from 'components/skills/Skills';
import styles from './ResumePage.scss';

const ResumePage = () => (
  <div className={styles.container}>
    <Header />
    <Hero />
    <div className={styles.skills}>
      <Skills />
    </div>
    <Footer />
  </div>
);

export default ResumePage;
