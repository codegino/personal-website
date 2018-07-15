import React from 'react';
import styles from './HeroResume.scss';

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.profileWrapper}>
      <div className={styles.profilePicture}>&nbsp;</div>
      <div className={styles.profileSummary}>
        <div className={styles.leftDetails}>
          <h2>Carlo Gino Catapang</h2>
          <h2>Associate Consultant at Capgemini</h2>
        </div>
        <div className={styles.rightDetails}>
          <h2>carloginocatapang@gmail.com</h2>
          <h2>National Capital Region, Philippines</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;