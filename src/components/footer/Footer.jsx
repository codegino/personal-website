import React from 'react';
import styles from './Footer.scss';
import TwitterLogo from 'assets/images/social/twitter.svg';
import LinkedinLogo from 'assets/images/social/linkedin.svg';
import FacebookLogo from 'assets/images/social/facebook.svg';
import GithubLogo from 'assets/images/social/github.svg';

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div>
        <span>
          <FacebookLogo className={styles.logo__facebook} width={50} height={50}/>
        </span>
        <span>
          Facebook
        </span>
      </div>
      <div>
        <span>
          <TwitterLogo className={styles.logo__twitter} width={50} height={50}/>
        </span>
        <span>
          Twitter 
        </span>
      </div>
      <div>
        <span>
          <LinkedinLogo className={styles.logo__linkedin} width={50} height={50}/>
        </span>
        <span>
         LinkedIn 
        </span>
      </div>
      <div>
        <span>
          <GithubLogo className={styles.logo__github} width={50} height={50}/>
        </span>
        <span>
         Github 
        </span>
      </div>
    </div>
  </div>
)

export default Footer;