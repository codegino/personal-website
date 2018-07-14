import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/Hero';
import Skills from 'components/skills/Skills';
import styles from './ResumePage.scss';

class ResumePage extends React.Component {
  footerRef = React.createRef();

  skillsRef = React.createRef();

  heroRef = React.createRef();

  headerRef = React.createRef();

  scrollTo = element => {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };

  isInViewport = (element, offset = 0) => {
    if (!element) return false;
    const { top } = element.getBoundingClientRect();
    return top + offset >= 0 && top - offset <= window.innerHeight;
  };

  render() {
    const navStyle = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      item: {
        marginTop: '20px',
      },
    };
    const sideNavigation = (
      <div style={navStyle.container}>
        <button type="button" style={navStyle.item} onClick={() => this.scrollTo(this.headerRef)}>
          1
        </button>
        <button type="button" style={navStyle.item} onClick={() => this.scrollTo(this.heroRef)}>
          2
        </button>
        <button type="button" style={navStyle.item} onClick={() => this.scrollTo(this.skillsRef)}>
          3
        </button>
        <button type="button" style={navStyle.item} onClick={() => this.scrollTo(this.footerRef)}>
          4
        </button>
      </div>
    );

    return (
      <div className={styles.container}>
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
        <div className={styles.sideNavigation}>{sideNavigation}</div>
      </div>
    );
  }
}

export default ResumePage;
