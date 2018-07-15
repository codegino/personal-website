import React from 'react';
import styles from './Checkpoint.scss';

type CheckpointProps = {
  children: string,
  size: Number,
  onClick: Function,
  style: Object,
  isActive: boolean,
};

const Checkpoint = (props: CheckpointProps) => {
  const { children, size, onClick, style, isActive } = props;

  const selectedStyle = isActive ? styles.btn__active : styles.btn__inactive;

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line */}
      <a
        className={`${styles.btn} ${selectedStyle}`}
        style={{ width: size, height: size, ...style }}
        onClick={onClick}
      >
        <div className={styles.center}>&nbsp;</div>
      </a>
      <p className={styles.label}>{children}</p>
    </div>
  );
};

export default Checkpoint;
