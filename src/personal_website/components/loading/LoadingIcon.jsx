import React from 'react';

import MyLogo from 'personal_website/assets/images/logo.svg';
import Reload from 'personal_website/assets/images/reload.svg';
import styles from './LoadingIcon.scss';

type LoadingIconProps = {
  className: Object,
  style: Object,
  size: number,
};

const LoadingIcon = (props: LoadingIconProps) => {
  const { className, style, size = 20 } = props;

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <Reload className={styles.borderLogo} width={size * 2} height={size * 2} />
      <MyLogo className={styles.mainLogo} width={size} height={size} />
    </div>
  );
};

export default LoadingIcon;
