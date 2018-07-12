import React from 'react';
import Skill from './Skill';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'stretch',
    flexDirection: 'column',
  },
  title: {
    alignSelf: 'center',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
};

const SkillSet = (props) => {
  const skills = props.data.map(o => <Skill name={o} />)

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h1>{props.title}</h1>
      </div>
      <div style={styles.wrapper}>
        {skills}
      </div>
    </div>
  )
};

export default SkillSet;
