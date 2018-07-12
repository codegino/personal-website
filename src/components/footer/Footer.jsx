import React from 'react';
import styles from './Footer.scss';
import TwitterLogo from 'assets/images/social/twitter.svg';
import LinkedinLogo from 'assets/images/social/linkedin.svg';
import FacebookLogo from 'assets/images/social/facebook.svg';
import InstagramLogo from 'assets/images/social/instagram.svg';
import GithubLogo from 'assets/images/social/github.svg';

const Footer = () => {
  const FooterItem = (props) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{marginRight: '.5rem'}}>
        <props.logo className={`${props.css} ${styles.logo}`} width={30} height={30} />
      </div>
      <h3>
        {props.text}
      </h3>
    </div>
  )
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <FooterItem logo={FacebookLogo} css={styles.logo__facebook} text="Facebook" />
        <FooterItem logo={LinkedinLogo} css={styles.logo__linkedin} text="LinkedIn" />
        <FooterItem logo={TwitterLogo} css={styles.logo__twitter} text="Twitter" />
        <FooterItem logo={InstagramLogo} css={styles.logo__instagram} text="Instagram" />
        <FooterItem logo={GithubLogo} css={styles.logo__github} text="Github" />
      </div>
      <div className={styles.copyright}>
        <h2>All rights reserve 2018</h2>
      </div>
    </div>
  )
}

export default Footer;