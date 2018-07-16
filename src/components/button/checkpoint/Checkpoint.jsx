import React from 'react';
import styles from './Checkpoint.scss';

type CheckpointProps = {
  children: string,
  size: Number,
  onClick: Function,
  style: Object,
  isActive: boolean,
  className: Object,
};

const Checkpoint = (props: CheckpointProps) => {
  const { children, size, onClick, style, isActive, className } = props;

  const selectedStyle = isActive ? styles.btn__active : styles.btn__inactive;

  console.log(style)
  return (
    <div className={styles.container} style={{...style}}>
      {/* eslint-disable-next-line */}
      <a
        className={`${styles.btn} ${selectedStyle} ${className}`}
        style={{ width: size, height: size}}
        onClick={onClick}
      >
        <div className={styles.center}>&nbsp;</div>
      </a>
      <p className={styles.label}>{isActive ? children : null}</p>
    </div>
  );
};

export default Checkpoint;
