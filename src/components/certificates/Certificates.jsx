import React from 'react';
import styles from './Certificates.scss';

type CertificateProps = {
  name: string,
  provider: string,
  date: string,
  url: string,
};

const Certification = (props: CertificateProps) => {
  const { name, provider, date, url } = props;

  return (
    <div className={styles.certificate}>
      <h2>{name}</h2>
      <h2>{provider}</h2>
      <h3>{date}</h3>
      <a href={url} target="blank" className={styles.url}>
        <p>Click here to view Certificate</p>
      </a>
    </div>
  );
};

const CertificationsAndOtherLearnings = () => {
  const certifications = [
    {
      name: 'English Lesson - Upper Intermediate',
      provider: 'EF English',
      date: 'December 2017 to Present',
      url: 'https://www.udemy.com/certificate/UC-RCRYCZBY',
    },
    {
      name: 'React 16 - The Complete Guide',
      provider: 'Udemy',
      date: 'May 2018',
      url: 'https://www.udemy.com/certificate/UC-RCRYCZBY',
    },
    {
      name: 'React Native',
      provider: 'Udemy',
      date: 'May 2018',
      url: 'https://www.udemy.com/certificate/UC-OQ9WR68S'
    },
    {
      name: 'Advance CSS and Sass',
      provider: 'Udemy',
      date: 'February 2018',
      url: 'https://www.udemy.com/certificate/UC-VKQDXXPL'
    },
    {
      name: 'HTML5 and CSS3',
      provider: 'Udemy',
      date: 'February 2018',
      url: 'https://www.udemy.com/certificate/UC-PT8OQV1B'
    },
    {
      name: 'Test Driven Development Workshop',
      provider: 'Capgemini',
      date: 'January 2018',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:6422986973161578496'
    },
    {
      name: 'Vue JS 2',
      provider: 'Udemy',
      date: 'December 2017',
      url: 'https://www.udemy.com/certificate/UC-210VA6FQ'
    },
    {
      name: 'Javascript',
      provider: 'Udemy',
      date: 'November 2017',
      url: 'https://www.udemy.com/certificate/UC-2ZUF5ARF'
    },
  ];
  const certificationsComp = certifications.map(o => (
    <Certification key={o.name} name={o.name} provider={o.provider} date={o.date} url={o.url} />
  ));

  return (
    <div className={styles.container}>
      <h1>Certifations and Other Learnings</h1>
      <div className={styles.certifications}>{certificationsComp}</div>
    </div>
  );
};

export default CertificationsAndOtherLearnings;
