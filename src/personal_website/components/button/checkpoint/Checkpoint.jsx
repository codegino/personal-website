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
  const {
    children, size, onClick, style, isActive, className,
  } = props;

  const btnStyle = isActive ? styles.btn__active : styles.btn__inactive;
  const labeltyle = isActive ? styles.label__active : styles.label__inactive;

  return (
    <div className={styles.container} style={{ ...style }}>
      {/* eslint-disable-next-line */}
      <a
        className={`${styles.btn} ${btnStyle} ${className}`}
        style={{ width: size, height: size }}
        onClick={onClick}
      >
        <div className={styles.center}>&nbsp;</div>
      </a>
      <p className={`${styles.label} ${labeltyle}`}>{children}</p>
    </div>
  );
};

export default Checkpoint;
