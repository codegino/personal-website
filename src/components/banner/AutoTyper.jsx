import React from 'react';
import styles from './AutoTyper.scss';

class AutoTyper extends React.PureComponent<{ messages: Array }> {
  static staticProps = {
    typeSpeed: 100,
  };

  state = {
    inputMessage: '',
  };

  componentDidMount() {
    this.autoType();
  }

  iterateWithDelay = async (list, func, delay) => {
    let i = 0;
    const sleep = ms =>
      new Promise(resolve => {
        setTimeout(resolve, ms);
      });

    const loop = async () => {
      while (i < list.length) {
        // eslint-disable-next-line
        await func();
        // eslint-disable-next-line
        await sleep(delay);
        i += 1;
      }
    };

    loop();
  };

  deleteMessage = async delay => {
    const loop = async () => {
      // eslint-disable-next-line
      while (this.state.inputMessage.length > 0) {
        // eslint-disable-next-line
        await this.setState(prevState => ({
          ...prevState,
          inputMessage: prevState.inputMessage.slice(0, -1),
        }));
        // eslint-disable-next-line
        await this.sleep(delay);
      }
    };

    await loop();
  };

  sleep = ms =>
    new Promise(resolve => {
      setTimeout(resolve, ms);
    });

  addMessage = async (message, delay) => {
    let i = 0;
    const loop = async () => {
      while (i < message.length) {
        // eslint-disable-next-line
        this.setState(prev => ({
          ...prev,
          inputMessage: prev.inputMessage + message[i],
        }));

        // eslint-disable-next-line
        await this.sleep(delay);
        i += 1;
      }
    };

    await loop();
  };

  async autoType() {
    const { messages } = this.props;
    let i = 0;

    await this.iterateWithDelay(
      messages,
      async () => {
        await this.addMessage(messages[i], 50);
        i += 1;
        if (i < messages.length) {
          await this.sleep(1000);
          await this.deleteMessage(30);
        }
      },
      100
    );
  }

  render() {
    const { inputMessage } = this.state;
    return <div className={styles.input}>{inputMessage}</div>;
  }
}

export default AutoTyper;
