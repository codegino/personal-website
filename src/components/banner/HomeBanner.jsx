import React from 'react';
import styles from './HomeBanner.scss';

const AutoTyper = (props: { text: string }) => {
  const { text } = props;
  return <input type="text" value={text} />;
};

// eslint-disable-next-line
class HomeBanner extends React.Component {
  state = {
    inputMessage: '',
    message1: 'Hello World!',
    message2: 'Ako si Carlo Gino Catapang',
    i: 0,
  };

  componentDidMount() {
    const { message1 } = this.state;
    this.addMessage(message1);
  }

  addMessage = message => {
    const { i } = this.state;

    if (i < message.length) {
      this.setState(prevState => ({
        ...prevState,
        i: prevState.i + 1,
        inputMessage: prevState.inputMessage + message[i],
      }));
      this.sleep(() => this.addMessage(message), 50);
    } else {
      this.sleep(this.deleteMessage, 1000);
    }
  };

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

  sleep = (func, ms) => new Promise(resolve => {
    setTimeout(func, ms);
    resolve();
  });

  render() {
    const { inputMessage } = this.state;

    return (
      <div className={styles.container}>
        <div>
          <h1>Welcome to my page</h1>
          <AutoTyper text={inputMessage} />
        </div>
      </div>
    );
  }
}

export default HomeBanner;
