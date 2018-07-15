import React from 'react';
import Skill from './Skill';
import styles from './SkillSet.scss';

type SkilSetProps = {
  data: Array,
  title: string,
};

const SkillSet = (props: SkilSetProps) => {
  const { data, title } = props;
  const skills = data.map((o, i) => {
    const key = `${o}-${i}`;
    return <Skill name={o} key={key} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.wrapper}>{skills}</div>
    </div>
  );
};

export default SkillSet;
