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
  Logo: Object,
  url: string,
};

const FooterItem = (props: FooterItemProps) => {
  const { Logo, css, text, url } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '.5rem' }}>
        <a href={url} target="blank">
          <Logo className={`${css} ${styles.logo}`} width={30} height={30} />
        </a>
      </div>
      <h3>{text}</h3>
    </div>
  );
};

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
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
    <div className={styles.copyright}>
      <p>All rights reserve 2018</p>
    </div>
  </div>
);

export default Footer;
