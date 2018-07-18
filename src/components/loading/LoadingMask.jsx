import React from 'react';
import MyLogo from 'assets/images/logo.svg';
import styles from './LoadingMask.scss';

const LoadingMask = () => (
  <div className={styles.container}>
    <MyLogo className={styles.logo} width={20} height={20} />
  </div>
);

export default LoadingMask;
