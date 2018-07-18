import React from 'react';

import MyLogo from 'assets/images/logo.svg';
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
      <MyLogo width={size} height={size} />
    </div>
  );
};

export default LoadingIcon;
