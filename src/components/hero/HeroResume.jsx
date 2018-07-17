import React from 'react';
import styles from './HeroResume.scss';

type HeroResumeProps = {
  user: {
    firstName: string,
    lastName: string,
  }
}

const HeroResume = (props: HeroResumeProps) => {
  const {user} = props;

  return (
    <div className={styles.container}>
      <h1>{user.firstName} B. {user.lastName}</h1>
      <div className={styles.profileWrapper}>
        <div className={styles.profilePicture}>&nbsp;</div>
        <div className={styles.profileSummary}>
          <div className={styles.leftDetails}>
            <h2>Associate Consultant at Capgemini</h2>
            <h2>carloginocatapang@gmail.com</h2>
            <h2>National Capital Region, Philippines</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroResume;
