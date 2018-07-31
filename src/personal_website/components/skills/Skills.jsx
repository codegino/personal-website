import React from 'react';
import SkillSet from './SkillSet';
import styles from './Skills.scss';

type SkillsProp = {
  skills: Array,
};

const Skills = (props: SkillsProp) => {
  const { skills } = props;
  return (
    <div className={styles.container}>
      <div className={styles.technologies}>
        <h1>Technologies</h1>
      </div>
      {skills.map(skill => (
        <SkillSet title={skill.title} key={skill.title} data={skill.skills} />
      ))}
    </div>
  );
};

export default Skills;
