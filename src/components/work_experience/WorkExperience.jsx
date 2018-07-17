import React from 'react';
import styles from './WorkExperience.scss';
import Experience from './Experience';

type WorkExperienceProps = {
  experiences: Array,
}

const WorkExperience = (props: WorkExperienceProps) => {
  const {experiences: experienceList} = props;
  const experiences = experienceList.map(o => <Experience key={o.company} experience={o} />);

  return (
    <div className={styles.container}>
      <h1>Work Experience</h1>
      <div className={styles.experiences}>{experiences}</div>
    </div>
  );
};

export default WorkExperience;
