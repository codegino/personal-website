import React from 'react';
import styles from './Checkpoint.scss';

type CheckpointProps = {
  children: string,
  size: Number,
  onClick: Function,
  style: Object,
};

const Checkpoint = (props: CheckpointProps) => {
  const { children, size, onClick, style } = props;

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line */}
      <a className={styles.btn} style={{ width: size, height: size, ...style }} onClick={onClick}>
        <div className={styles.active}>&nbsp;</div>
      </a>
      <p className={styles.label}>{children}</p>
    </div>
  );
};

export default Checkpoint;
