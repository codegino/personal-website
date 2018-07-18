import React from 'react';
import DefaultButton from 'personal_website/components/button/DefaultButton';
import { databaseRef } from 'personal_website/services/firebase';
import styles from './HomeBanner.scss';
import AutoTyper from './AutoTyper';

class HomeBanner extends React.PureComponent {
  state = {
    messages: [],
    isTranscriptVisible: false,
    isToggleVisible: false,
  };

  componentDidMount() {
    databaseRef
      .child('personal')
      .child('messages')
      .on('value', snapshot => {
        const [messages] = Object.values(snapshot.val());
        this.setState(prevState => ({
          ...prevState,
          messages,
        }));
      });
  }

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

    return (
      <div className={`${styles.container} ${animatedBackground}`}>
        <div style={{ textAlign: 'center' }}>
          <AutoTyper
            messages={messages}
            onFinish={this.onFinishHandler}
            className={styles.autoTyper}
          />
        </div>
        {isTranscriptVisible ? transcript : null}
        {toggleButton}
        <div className={styles.photo}>&nbsp;</div>
      </div>
    );
  }
}

export default HomeBanner;
