import React from 'react';
import DefaultButton from 'components/button/DefaultButton';
import styles from './HomeBanner.scss';
import AutoTyper from './AutoTyper';

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
    isTranscriptVisible: false,
  };

  onToggleHandler = () => {
    const { isTranscriptVisible } = this.state;
    this.setState(prev => ({
      ...prev,
      isTranscriptVisible: !isTranscriptVisible,
    }));
  };

  render() {
    const { messages } = this.state;

    const transcript = (
      <div className={styles.transcript}>{messages.map(o => <p key={o}>{o}</p>)}</div>
    );
    const { isTranscriptVisible } = this.state;
    return (
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <AutoTyper messages={messages} />
        </div>
        {isTranscriptVisible ? transcript : null}
        <DefaultButton onClick={this.onToggleHandler} className={styles.transcriptToggle}>
          See Transcript
        </DefaultButton>
        <div className={styles.photo}>&nbsp;</div>
      </div>
    );
  }
}

export default HomeBanner;
