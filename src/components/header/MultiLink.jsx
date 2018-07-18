import React from 'react';
import styles from './MultiLink.scss';

class MultiLink extends React.PureComponent {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return <div className={styles.container}>MultiLink</div>;
  }
}

export default MultiLink;
