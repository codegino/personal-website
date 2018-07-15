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
    {
      company: 'Nokia Networks (5G Feature Team)',
      position: 'Research & Development II',
      date: 'February 2016 to September 2018',
      duties: [
        'Conducted code reviews as Code Guardian improving team competence and overall code quality of the project',
        'Created scripts for Continuous Integration to ensure continuous delivery',
        'Led the initiative to re-engineer poorly written modules and project in compliance with SOLID principles',
        'Led the overall architecture of Software Component Testing Framework for automated module testing',
        'Provided training in C++, Git, Unit Testing, Design Patterns and SOLID principles',
      ],
    },
    {
      company: 'Nokia Networks (BTS Site Manager Team)',
      position: 'Research & Development I',
      date: 'August 2014 to February 2016',
      duties: [
        'Worked with an internal website use to organize test cases',
        'Developed Java-based component that parses XML which is used by BTS for its validation',
        'Contributed to constant release of product by working with Continuous Integration scripts using ANT',
        'Fixed software issues and provided Root Cause Analysis',
      ],
    },
  ];

  const experiences = experienceList.map(o => <Experience key={o.company} experience={o} />);

  return (
    <div className={styles.container}>
      <h1>Work Experience</h1>
      <div className={styles.experiences}>{experiences}</div>
    </div>
  );
};

export default WorkExperience;
