import React from 'react';
import styles from './DefaultButton.scss';

type DefaultButtonProps = {
  children: string,
  onClick: Function,
  style: Object,
  className: Object,
};

const DefaultButton = (props: DefaultButtonProps) => {
  const { children, onClick, style, className } = props;

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line */}
      <a
        className={`${styles.btn} ${className}`}
        style={{...style }}
        onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
};

export default DefaultButton;
