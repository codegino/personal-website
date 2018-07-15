import React from 'react';
import styles from './AutoTyper.scss';

class AutoTyper extends React.PureComponent<{ messages: Array }> {
  static staticProps = {
    typeSpeed: 100,
  };

  state = {
    inputMessage: '',
    i: 0,
    index: 0,
  };

  componentDidMount() {
    this.autoType();
  }

  deleteMessage = (message) => {
    const { i } = this.state;

    if (i > 0) {
      this.setState(prevState => ({
        ...prevState,
        i: prevState.i - 1,
        inputMessage: prevState.inputMessage.slice(0, -1),
      }));
      const deleteSpeed = 1000 / message.length;
      setTimeout(() => this.deleteMessage(message), deleteSpeed);
    }
  };

  async addMessage(message) {
    const { i } = this.state;

    if (i < message.length) {
      await this.setState(prevState => ({
        ...prevState,
        i: prevState.i + 1,
        inputMessage: prevState.inputMessage + message[i],
      }));

      await setTimeout(() => this.addMessage(message), AutoTyper.staticProps.typeSpeed);
    } else {
      await setTimeout(() => this.deleteMessage(message), AutoTyper.staticProps.typeSpeed);
    }
  }

  async autoType(delay = 0) {
    const { index } = this.state;
    const { messages } = this.props;

    if (index < messages.length) {
      await this.setState(prevState => ({
        ...prevState,
        index: prevState.index + 1,
      }));
      await setTimeout(() => this.addMessage(messages[index]), delay);
      this.autoType(delay + messages[index].length * AutoTyper.staticProps.typeSpeed * 2.2);
    }
  }

  render() {
    const { inputMessage } = this.state;
    return <textarea type="text" value={inputMessage} className={styles.input} />;
  }
}

export default AutoTyper;
