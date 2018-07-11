import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.coverPhoto}>&nbsp;</div>
    <div className={styles.profileWrapper}>
      <div className={styles.profilePicture}>&nbsp;</div>
      <div className={styles.profileSummary}>
        <div className={styles.leftDetails}>
          <h1>Carlo Gino Catapang</h1>
          <h2>Associate Consultant at Capgemini</h2>
          <h2>NCR - National Capital Region, Philippines</h2>
        </div>
        <div className={styles.rightDetails}>
          <h2>Some Details #1</h2>
          <h2>Some Details #2</h2>
          <h2>Some Details #3</h2>
          <h2>Some Details #4</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
