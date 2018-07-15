import React from 'react';
import styles from './WorkExperience.scss';
import Experience from './Experience';

const WorkExperience = () => {
  const experienceList = [
    {
      company: 'Capgemini Philippines',
      position: 'Associate Consultant',
      date: 'September 2017 to Present',
      duties: [
        'Led development of CapGenie Web, an internal website used in employee management',
        'A part of feature team responsible for creating CapGenie Mobile',
        'Refactored poorly written code to improve performance, readability and maintainability',
        'Led the transitioning of CapGenie Mobile from Cordova to React Native',
      ],
    },
  ];

  const experiences = experienceList.map(o => <Experience experience={o} />);

  return (
    <div className={styles.container}>
      <h1>Work Experience</h1>
      <div className={styles.experiences}>{experiences}</div>
    </div>
  );
};

export default WorkExperience;
