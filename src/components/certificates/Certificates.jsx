import React from 'react';
import styles from './Certificates.scss';

type CertificateProps = {
  name: string,
  provider: string,
  date: string,
};

const Certification = (props: CertificateProps) => {
  const { name, provider, date } = props;

  return (
    <div className={styles.certificate}>
      <h2>{name}</h2>
      <h2>{provider}</h2>
      <h3>{date}</h3>
    </div>
  );
};

const CertificationsAndOtherLearnings = () => {
  const certifications = [
    {
      name: 'English Lesson - Upper Intermediate',
      provider: 'EF English',
      date: 'December 2017 to Present',
    },
    {
      name: 'React 16 - The Complete Guide',
      provider: 'Udemy',
      date: 'May 2018',
    },
    {
      name: 'React Native',
      provider: 'Udemy',
      date: 'May 2018',
    },
    {
      name: 'Advance CSS and Sass',
      provider: 'Udemy',
      date: 'February 2018',
    },
    {
      name: 'HTML5 and CSS3',
      provider: 'Udemy',
      date: 'February 2018',
    },
    {
      name: 'Test Driven Development Workshop',
      provider: 'Capgemini',
      date: 'January 2018',
    },
    {
      name: 'Vue JS 2',
      provider: 'Udemy',
      date: 'December 2017',
    },
    {
      name: 'Javascript',
      provider: 'Udemy',
      date: 'November 2017',
    },
  ];
  const certificationsComp = certifications.map(o => (
    <Certification key={o.name} name={o.name} provider={o.provider} date={o.date} />
  ));
  return (
    <div className={styles.container}>
      <h1>Certifations and Other Learnings</h1>
      <div className={styles.certifications}>
        {certificationsComp}
      </div>
    </div>
  );
};

export default CertificationsAndOtherLearnings;
