import React from 'react';
import styles from './HomeBanner.scss';
import AutoTyper from './AutoTyper';

// eslint-disable-next-line
class HomeBanner extends React.Component {
  state = {
    messages: [
      'Hi! How are you?',
      'This is Gihooh. Your poging developer.',
      "I'm so pogi",
      'Pangit ka huhuhu I love you Mariel.',
      'Pangit ka sobra. I love you Mariel.',
    ],
  };

  render() {
    const { messages } = this.state;

    return (
      <div className={styles.container}>
        <div>
          <h1>Welcome to my page</h1>
          <AutoTyper messages={messages} />
        </div>
      </div>
    );
  }
}

export default HomeBanner;
