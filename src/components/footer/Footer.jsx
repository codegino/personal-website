import React from 'react';
import TwitterLogo from 'assets/images/social/twitter.svg';
import LinkedinLogo from 'assets/images/social/linkedin.svg';
import FacebookLogo from 'assets/images/social/facebook.svg';
import InstagramLogo from 'assets/images/social/instagram.svg';
import GithubLogo from 'assets/images/social/github.svg';
import styles from './Footer.scss';

type FooterItemProps = {
  css: string,
  text: string,
  logo: Object,
};

const FooterItem = (props: FooterItemProps) => {
  const { logo, css, text } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '.5rem' }}>
        <logo className={`${css} ${styles.logo}`} width={30} height={30} />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <FooterItem
        logo={FacebookLogo}
        css={styles.logo__facebook}
        text="Facebook"
      />
      <FooterItem
        logo={LinkedinLogo}
        css={styles.logo__linkedin}
        text="LinkedIn"
      />
      <FooterItem
        logo={TwitterLogo}
        css={styles.logo__twitter}
        text="Twitter"
      />
      <FooterItem
        logo={InstagramLogo}
        css={styles.logo__instagram}
        text="Instagram"
      />
      <FooterItem logo={GithubLogo} css={styles.logo__github} text="Github" />
    </div>
    <div className={styles.copyright}>
      <h2>All rights reserve 2018</h2>
    </div>
  </div>
);

export default Footer;
