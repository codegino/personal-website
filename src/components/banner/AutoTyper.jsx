import React from 'react';

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

  deleteMessage = () => {
    const { i } = this.state;

    if (i > 0) {
      this.setState(prevState => ({
        ...prevState,
        i: prevState.i - 1,
        inputMessage: prevState.inputMessage.slice(0, -1),
      }));
      setTimeout(this.deleteMessage, 50);
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
      await setTimeout(() => this.deleteMessage(), 200);
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
      this.autoType(delay + messages[index].length * AutoTyper.staticProps.typeSpeed * 2.5);
    }
  }

  render() {
    const { inputMessage } = this.state;
    return <input type="text" value={inputMessage} style={{ width: '100%' }} />;
  }
}

export default AutoTyper;
