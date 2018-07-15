import React from 'react';
import styles from './HomeBanner.scss';
import AutoTyper from './AutoTyper';

// eslint-disable-next-line
class HomeBanner extends React.Component {
  state = {
    messages: [
      'Hi! How are you?',
      'This is Gihooh, your Software Developer who gives away free jokes. Hehe.',
      'Got any ideas for personal, business and other uses?',
      "Let's make them come to existense!",
      "We'll create something marvelous together.",
      'Welcome to my page!',
    ],
  };

  render() {
    const { messages } = this.state;

    return (
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <AutoTyper messages={messages} />
        </div>
        <div className={styles.photo}>&nbsp;</div>
      </div>
    );
  }
}

export default HomeBanner;
