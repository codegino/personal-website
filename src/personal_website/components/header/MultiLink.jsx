import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MultiLink.scss';

type MultiLinkProps = {
  title: string,
  links: Array,
  className: Object,
  isExternal: boolean,
};

class MultiLink extends React.PureComponent<MultiLinkProps> {
  render() {
    const {
      title,
      links = [],
      className = undefined,
      isExternal = false,
    } = this.props;

    let linksList;
    if (isExternal) {
      linksList = links.map(link => (
        <a href={link.to} key={link.to} target="blank" className={styles.link}>
          <p className={styles.label}>{link.title}</p>
        </a>
      ));
    } else {
      linksList = links.map(link => (
        <NavLink
          activeClassName={styles.link__active}
          className={styles.link}
          exact
          key={link.title}
          to={link.to}
        >
          <p className={styles.label}>{link.title}</p>
        </NavLink>
      ));
    }

    return (
      <div className={`${styles.container} ${className}`}>
        <p>{title}</p>
        <div className={styles.listWrapper}>{linksList}</div>
      </div>
    );
  }
}

export default MultiLink;
