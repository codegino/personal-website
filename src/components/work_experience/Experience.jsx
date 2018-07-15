import React from 'react';

import styles from './WorkExperience.scss';

type ExperienceProps = {
  experience: {
    duties: Array,
    company: string,
    position: string,
    date: string,
  },
};

const Experience = (props: ExperienceProps) => {
  const { experience } = props;
  const { duties, company, position, date } = experience;
  const tasks = duties.map(o => (
    <li>
      <p>{o}</p>
    </li>
  ));
  return (
    <div className={styles.experience}>
      <h2>
        {company} - {position}
      </h2>
      <h3>{date}</h3>
      <ul>{tasks}</ul>
    </div>
  );
};

export default Experience;
