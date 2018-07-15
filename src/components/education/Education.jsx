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

const Education = () => {
  const schools = [
    {
      name: 'AMA Computer University',
      course: 'Bacherlor of Science in Computer Engineering',
      year: '2010 to 2014',
    },
    {
      name: 'Batangas State University',
      course: 'Bachelor of Science in General Engineering',
      year: '2007 to 2010',
    },
    {
      name: 'Our Lady of Caysasay Academy',
      course: 'Secondary School',
      year: '2003 to 2007',
    },
  ];
  const schoolsComp = schools.map(o => (
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
