import React from 'react';
import styles from './HomeBanner.scss';

const AutoTyper = (props: { text: string }) => {
  const { text } = props;
  return <input type="text" value={text} style={{width: '100%'}}/>;
};

// eslint-disable-next-line
class HomeBanner extends React.Component {
  static staticProps = {
    typeSpeed: 100,
  };

  state = {
    inputMessage: '',
    i: 0,
    list: ['Hi! How are you?', 'This is Gihooh. Your poging developer.', "I'm so pogi",'Pangit ka huhuhu I love you Mariel.', 'Pangit ka sobra. I love you Mariel.'],
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
      await setTimeout(() => this.addMessage(message), HomeBanner.staticProps.typeSpeed);
    } else {
      await setTimeout(() => this.deleteMessage(), 200);
    }
  }

  async autoType(delay = 0) {
    console.log(delay)
    const { index, list } = this.state;

    if (index < list.length) {
      await this.setState(prevState => ({
        ...prevState,
        index: prevState.index + 1,
      }));
      await setTimeout(() => this.addMessage(list[index]), delay);
      this.autoType(delay + list[index].length * HomeBanner.staticProps.typeSpeed * 2.5)
    }
  }

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
