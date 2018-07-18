import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MultiLink.scss';

type MultiLinkProps = {
  title: string,
};

class MultiLink extends React.PureComponent<MultiLinkProps> {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    const { title } = this.props;

    const a = [
      { title: 'About Me', to: '/about-me' },
      { title: 'About this Site', to: '/about-site' },
    ];

    const links = a.map(link => (
      <NavLink
        exact
        key={link.title}
        activeClassName={styles.link__active}
        className={styles.link}
        to={link.to}
      >
        <p className={styles.label}>{link.title}</p>
      </NavLink>
    ));

    return (
      <div className={styles.container}>
        <p>{title}</p>
        <div className={styles.listWrapper}>{links}</div>
      </div>
    );
  }
}

export default MultiLink;
