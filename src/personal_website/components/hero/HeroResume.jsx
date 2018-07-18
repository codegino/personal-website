import React from 'react';
import styles from './HeroResume.scss';

type HeroResumeProps = {
  user: {
    firstName: string,
    lastName: string,
  },
};

const HeroResume = (props: HeroResumeProps) => {
  const { user } = props;

  return (
    <div className={styles.container}>
      <h1>
        {user.firstName} {user.middleName} {user.lastName}
      </h1>
      <div className={styles.profileWrapper}>
        <div className={styles.profilePicture}>&nbsp;</div>
        <div className={styles.profileSummary}>
          <div className={styles.leftDetails}>
            <h2>
              {user.jobTitle} at {user.company}
            </h2>
            <h2>{user.email}</h2>
            <h2>{user.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroResume;
