import React from 'react';
import { NavLink } from 'react-router-dom';
import TwitterLogo from 'personal_website/assets/images/social/twitter.svg';
import LinkedinLogo from 'personal_website/assets/images/social/linkedin.svg';
import FacebookLogo from 'personal_website/assets/images/social/facebook.svg';
import InstagramLogo from 'personal_website/assets/images/social/instagram.svg';
import GithubLogo from 'personal_website/assets/images/social/github.svg';
import styles from './Footer.scss';

type FooterItemProps = {
  css: string,
  Logo: Object,
  url: string,
};

const FooterItem = (props: FooterItemProps) => {
  const { Logo, css, url } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <div style={{ marginRight: '.5rem' }}> */}
      <a href={url} target="blank">
        <Logo className={`${css} ${styles.logo}`} width={30} height={30} />
      </a>
      {/* </div> */}
    </div>
  );
};

const Footer = (props: { className: Object }) => {
  const { className } = props;
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
          <h2 className={styles.subWrapperTitle}>Links</h2>
          <div className={styles.subWrapperContent}>
            <div className={styles.flexColumn}>
              <NavLink exact activeClassName={styles.link__active} className={styles.link} to="/">
                <p className={styles.link}>Home</p>
              </NavLink>
              <NavLink
                exact
                activeClassName={styles.link__active}
                className={styles.link}
                to="/Resume"
              >
                <p className={styles.link}>Resume</p>
              </NavLink>
            </div>
            <div className={styles.flexColumn}>
              <NavLink
                exact
                activeClassName={styles.link__active}
                className={styles.link}
                to="/about-me"
              >
                <p className={styles.link}>About Me</p>
              </NavLink>
              <NavLink
                exact
                activeClassName={styles.link__active}
                className={styles.link}
                to="/about-website"
              >
                <p className={styles.link}>About Website</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.subWrapper}>
          <h2 className={styles.subWrapperTitle}>Social</h2>
          <div className={styles.subWrapperContent}>
            <FooterItem
              Logo={FacebookLogo}
              css={styles.logo__facebook}
              text="Facebook"
              url="https://facebook.com/carlogihooh"
            />
            <FooterItem
              Logo={LinkedinLogo}
              css={styles.logo__linkedin}
              text="LinkedIn"
              url="https://www.linkedin.com/in/gihooh"
            />
            <FooterItem
              Logo={TwitterLogo}
              css={styles.logo__twitter}
              text="Twitter"
              url="https://twitter.com/carlogihooh"
            />
            <FooterItem
              Logo={InstagramLogo}
              css={styles.logo__instagram}
              text="Instagram"
              url="https://www.instagram.com/carlogihooh"
            />
            <FooterItem
              Logo={GithubLogo}
              css={styles.logo__github}
              text="Github"
              url="https://github.com/gihooh"
            />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>All rights reserved 2018</p>
      </div>
    </div>
  );
};

export default Footer;
