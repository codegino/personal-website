import React from 'react';
import Skill from './Skill';
import colors from 'enums/colors';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: colors.colorPrimary,
  },
  title: {
    alignSelf: 'center',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: colors.colorSecondary,
  }
};

const Skills = () => (
  <div style={styles.container}>
    <div style={styles.title}>
      <h1>Technical Skills</h1>
    </div>
    <div style={styles.wrapper}>
      <Skill name="ReactJS" />
      <Skill name="React Native" />
      <Skill name="VueJS" />
      <Skill name="CS3" />
      <Skill name="HTML5" />
      <Skill name="Jest" />
      <Skill name="Javascript/ES6" />
      <Skill name="Java" />
      <Skill name="C++" />
      <Skill name="Python" />
      <Skill name="Less" />
      <Skill name="Sass" />
    </div>
    <div style={styles.title}>
      <h1>Team Skills</h1>
    </div>
    <div style={styles.wrapper}>
      <Skill name="Agile/Scrum" />
      <Skill name="Test Driven Development" />
    </div>
  </div>
)

export default Skills;
