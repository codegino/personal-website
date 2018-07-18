import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MultiLink.scss';

type MultiLinkProps = {
  title: string,
  links: Array,
}

class MultiLink extends React.PureComponent<MultiLinkProps> {
  render() {
    const { title, links = [] } = this.props;

    const linksList = links.map(link => (
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
        <div className={styles.listWrapper}>{linksList}</div>
      </div>
    );
  }
}

export default MultiLink;
