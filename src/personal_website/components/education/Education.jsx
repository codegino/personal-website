import React from 'react';
import styles from './Education.scss';

type SchoolProps = {
  name: string,
  course: string,
  year: string,
};

const School = (props: SchoolProps) => {
  const { name, course, year } = props;

  return (
    <div className={styles.school}>
      <h2>{name}</h2>
      <h2>{course}</h2>
      <h3>{year}</h3>
    </div>
  );
};

type EducationProps = {
  education: Array,
};

const Education = (props: EducationProps) => {
  const { education } = props;
  const schoolsComp = education.map(o => (
    <School key={o.name} name={o.name} course={o.course} year={o.year} />
  ));
  return (
    <div className={styles.container}>
      <h1>Education</h1>
      {schoolsComp}
    </div>
  );
};

export default Education;
