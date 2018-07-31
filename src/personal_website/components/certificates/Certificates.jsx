import React from 'react';
import styles from './Certificates.scss';

type CertificateProps = {
  name: string,
  provider: string,
  date: string,
  url: string,
};

const Certification = (props: CertificateProps) => {
  const {
    name, provider, date, url,
  } = props;

  return (
    <div className={styles.certificate}>
      <div className={`${styles.face} ${styles.faceFront}`}>
        <h2>{name}</h2>
        <h2>{provider}</h2>
        <h3>{date}</h3>
      </div>
      <div className={`${styles.face} ${styles.faceBack}`}>
        <a href={url} target="blank" className={styles.url}>
          <p className={styles.link}>Click here to view certificate</p>
        </a>
      </div>
    </div>
  );
};

type CertificationsAndOtherLearningsProps = {
  certifications: Array,
};

const CertificationsAndOtherLearnings = (props: CertificationsAndOtherLearningsProps) => {
  const { certifications } = props;
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
