import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/Hero';
import Skills from 'components/skills/Skills';
import SideCheckpoint from './SideCheckpoint';
import styles from './ResumePage.scss';

class ResumePage extends React.Component {
  footerRef = React.createRef();

  skillsRef = React.createRef();

  heroRef = React.createRef();

  headerRef = React.createRef();

  scrollTo = element => {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  isInViewport = (element, offset = 0) => {
    if (!element) return false;
    const { top } = element.getBoundingClientRect();
    return top + offset >= 0 && top - offset <= window.innerHeight;
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sideNavigation}>
          <SideCheckpoint
            goToHero={() => {this.scrollTo(this.heroRef)}}
            goToHeader={() => {this.scrollTo(this.headerRef)}}
            goToSkills={() => {this.scrollTo(this.skillsRef)}}
            goToFooter={() => {this.scrollTo(this.footerRef)}}
          />
        </div>
        <div className={styles.wrapper}>
          <div
            ref={el => {
              this.headerRef = el;
            }}
          >
            <Header />
          </div>
          <div
            ref={el => {
              this.heroRef = el;
            }}
          >
            <Hero />
          </div>
          <div
            className={styles.skills}
            ref={el => {
              this.skillsRef = el;
            }}
          >
            <Skills />
          </div>
          <div
            ref={el => {
              this.footerRef = el;
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
