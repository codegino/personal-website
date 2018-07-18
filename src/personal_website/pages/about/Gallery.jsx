import React from 'react';
import LeftArrowIcon from 'personal_website/assets/images/arrows/left-arrow.svg';
import RightArrowIcon from 'personal_website/assets/images/arrows/right-arrow.svg';
import styles from './Gallery.scss';

type ItemProps = {
  Logo: Object,
  name: string,
  fill: string,
  height: number,
  width: number,
};

const CurrentItem = (props: { ...ItemProps, link: string }) => {
  const { Logo, name, fill = null, height = 150, width = 150, link } = props;

  return (
    <div className={styles.data} key={name}>
      <h2>{name}</h2>
      <a href={link} target="blank">
        <Logo className={styles.logo} height={height} width={width} fill={fill} />
      </a>
      <p style={{marginTop: '2rem'}}>Click icon to view link</p>
    </div>
  );
};

const PreviewItem = (props: ItemProps) => {
  const { Logo, name, fill = null, height = 20, width = 20 } = props;

  return (
    <div className={styles.technology} key={name}>
      <Logo height={height} width={width} fill={fill} />
    </div>
  );
};

class Gallery extends React.PureComponent<{ data: Array }> {
  state = {
    current: 1,
    prev: 0,
    next: 2,
  };

  onLeftClick = () => {
    this.previousItem();
  };

  onRightClick = () => {
    this.nextItem();
  };

  previousItem = () => {
    const { data } = this.props;
    this.setState(prevState => {
      const gen = num => (num === 0 ? data.length - 1 : num - 1);

      return {
        ...prevState,
        current: gen(prevState.current),
        prev: gen(prevState.prev),
        next: gen(prevState.next),
      };
    });
  };

  nextItem = () => {
    const { data } = this.props;

    this.setState(prevState => {
      const gen = num => (num === data.length - 1 ? 0 : num + 1);
      return {
        ...prevState,
        current: gen(prevState.current),
        prev: gen(prevState.prev),
        next: gen(prevState.next),
      };
    });
  };

  render() {
    const { current, prev, next } = this.state;
    const { data } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.dataWrapper}>
          <div className={styles.current}>
            <CurrentItem {...data[current]} />
          </div>
        </div>
        <div className={styles.arrowWrapper}>
          {/* eslint-disable-next-line */}
          <div onClick={this.onLeftClick} style={{ display: 'flex', alignItems: 'center' }}>
            <LeftArrowIcon className={styles.arrow} width={40} height={40} />
            <PreviewItem {...data[prev]} />
          </div>
          {/* eslint-disable-next-line */}
          <div onClick={this.onRightClick} style={{ display: 'flex', alignItems: 'center' }}>
            <PreviewItem {...data[next]} />
            <RightArrowIcon className={styles.arrow} width={40} height={40} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
