import React from 'react';
import LoadingIcon from 'components/loading/LoadingIcon';
import styles from './AutoTyper.scss';

type AutoTyperProps = {
  messages: Array,
  onFinish: Function,
  className: Object,
  style: Object,
};

class AutoTyper extends React.PureComponent<AutoTyperProps> {
  static staticProps = {
    typeSpeed: 100,
  };

  state = {
    inputMessage: '',
  };

  componentDidUpdate(prevProps) {
    const { messages } = this.props;
    if (prevProps.messages.length === 0 && messages.length > 0) {
      this.autoType();
    }
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
    const { messages, onFinish } = this.props;
    let i = 0;
    const typingSpeed = 50;
    const readingTime = 1000;
    const deleteSpeed = 40;
    const nextMessageDelay = 500;

    await this.iterateWithDelay(
      messages,
      async () => {
        await this.addMessage(messages[i], typingSpeed);
        i += 1;
        if (i < messages.length) {
          await this.sleep(readingTime);
          await this.deleteMessage(deleteSpeed);
        } else {
          onFinish();
        }
      },
      nextMessageDelay
    );
  }

  render() {
    const { inputMessage } = this.state;
    const { className, style, messages } = this.props;
    return (
      <div className={`${styles.input} ${className}`} style={style}>
        {messages.length === 0 ? <LoadingIcon /> : inputMessage}
      </div>
    );
  }
}

export default AutoTyper;
