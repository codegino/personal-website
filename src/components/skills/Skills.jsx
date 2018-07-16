import React from 'react';
import SkillSet from './SkillSet';
import styles from './Skills.scss';

const Skills = () => {
  const skillSet = [
    {
      title: 'Current Skills',
      skills: ['ReactJS', 'React Native', 'Vue', 'javascript/es6', 'HTML5', 'CSS3', 'jest'],
    },
    {
      title: 'Frontend Libraries',
      skills: [
        'redux',
        'redux-saga',
        'vue-router',
        'sass/scss',
        'react-native-navigaton',
        'react-router',
        'vue-router',
        'animate.css',
        'redux-thunk',
        'less',
        'webpack',
        'jquery',
        'vuex',
      ],
    },
    {
      title: 'General Programming',
      skills: [
        'Pair Programming',
        'Agile/Scrum',
        'Test Driven Development',
        'Refactoring',
        'Design Patterns',
        'Responsive Design',
        'Clean Code',
      ],
    },
    {
      title: 'Experience With',
      skills: [
        'Java',
        'junit',
        'mockito',
        'C++',
        'Python',
        'pytest',
        'gtest/gmock',
        'elixir',
        'erlang',
        'kotlin',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.technologies}>
        <h1>Technologies</h1>
      </div>
      {skillSet.map(skill => (
        <SkillSet title={skill.title} key={skill.title} data={skill.skills} />
      ))}
    </div>
  );
};

export default Skills;
