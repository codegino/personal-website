import React from 'react';
import styles from './Skill.scss';

type Props = {
  name: string,
};

const Skill = (props: Props) => {
  const { name } = props;
  return (
    <div className={styles.container}>
      <p>{name}</p>
    </div>
  );
};

export default Skill;
