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
    isToggleVisible: false,
  };

  onToggleHandler = () => {
    const { isTranscriptVisible } = this.state;
    this.setState(prev => ({
      ...prev,
      isTranscriptVisible: !isTranscriptVisible,
    }));
  };

  onFinishHandler = () => {
    this.setState(prev => ({
      ...prev,
      isToggleVisible: true,
    }));
  };

  render() {
    const { messages, isToggleVisible, isTranscriptVisible } = this.state;

    const transcript = (
      <div className={styles.transcript}>{messages.map(o => <p key={o}>{o}</p>)}</div>
    );

    const toggleButton = isToggleVisible ? (
      <DefaultButton onClick={this.onToggleHandler} className={styles.transcriptToggle}>
        {isTranscriptVisible ? 'Hide Transcript' : 'Show Transcript'}
      </DefaultButton>
    ) : null;

    const animatedBackground = isToggleVisible ? styles.container__animated : null;

    console.log(animatedBackground)

    return (
      <div className={`${styles.container} ${animatedBackground}`}>
        <div style={{ textAlign: 'center' }}>
          <AutoTyper messages={messages} onFinish={this.onFinishHandler} className={styles.autoTyper}/>
        </div>
        {isTranscriptVisible ? transcript : null}
        {toggleButton}
        <div className={styles.photo}>&nbsp;</div>
      </div>
    );
  }
}

export default HomeBanner;
