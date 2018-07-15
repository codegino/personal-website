import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/HeroResume';
import Skills from 'components/skills/Skills';
import WorkExperience from 'components/work_experience/WorkExperience';
import Checkpoint from 'components/button/checkpoint/Checkpoint';
import styles from './ResumePage.scss';

const navStyle = {
  container: {
    height: '100%',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    left: '3px',
    top: 0,
  },
  item: {
    marginTop: '20px',
  },
};

class ResumePage extends React.Component {
  footerRef = React.createRef();

  skillsRef = React.createRef();

  heroRef = React.createRef();

  headerRef = React.createRef();

  workExperienceRef = React.createRef();

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    isHeaderVisible: false,
    isHeroVisible: false,
    isSkillVisible: false,
    isFooterVisible: false,
    isWorkExperienceVisible: false,
  };

  componentDidMount() {
    this.changeCheckpoint();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  changeCheckpoint = () => {
    let isHeaderVisible = false;
    let isHeroVisible = false;
    let isSkillVisible = false;
    let isFooterVisible = false;
    let isWorkExperienceVisible = false;

    if (this.isInViewport(this.headerRef)) {
      isHeaderVisible = true;
    } else if (this.isInViewport(this.heroRef)) {
      isHeroVisible = true;
    } else if (this.isInViewport(this.skillsRef)) {
      isSkillVisible = true;
    } else if (this.isInViewport(this.footerRef)) {
      isFooterVisible = true;
    } else if (this.isInViewport(this.workExperienceRef)) {
      isWorkExperienceVisible = true;
    }

    this.setState(prevState => ({
      ...prevState,
      isHeaderVisible,
      isHeroVisible,
      isSkillVisible,
      isFooterVisible,
      isWorkExperienceVisible,
    }));
  };

  scrollTo = element => {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  isInViewport = (element, offset = 0) => {
    if (!element) return false;
    const { top } = element.getBoundingClientRect();
    return top + offset >= 0 && top - offset <= window.innerHeight;
  };

  handleScroll = () => {
    this.changeCheckpoint();
  };

  render() {
    const {
      isHeaderVisible,
      isHeroVisible,
      isSkillVisible,
      isFooterVisible,
      isWorkExperienceVisible,
    } = this.state;
    this.isInViewport(this.headerRef.current);
    const sideCheckpoint = (
      <div style={navStyle.container}>
        <div style={navStyle.wrapper}>
          <Checkpoint
            size={20}
            style={navStyle.item}
            onClick={() => {
              this.scrollTo(this.headerRef);
            }}
            isActive={isHeaderVisible}
          >
            Header
          </Checkpoint>
          <Checkpoint
            size={20}
            style={navStyle.item}
            onClick={() => {
              this.scrollTo(this.heroRef);
            }}
            isActive={isHeroVisible}
          >
            Hero
          </Checkpoint>
          <Checkpoint
            size={20}
            style={navStyle.item}
            onClick={() => {
              this.scrollTo(this.skillsRef);
            }}
            isActive={isSkillVisible}
          >
            Skills
          </Checkpoint>
          <Checkpoint
            size={20}
            style={navStyle.item}
            onClick={() => {
              this.scrollTo(this.workExperienceRef);
            }}
            isActive={isWorkExperienceVisible}
          >
            Work
          </Checkpoint>
          <Checkpoint
            size={20}
            style={navStyle.item}
            onClick={() => {
              this.scrollTo(this.footerRef);
            }}
            isActive={isFooterVisible}
          >
            Footer
          </Checkpoint>
        </div>
      </div>
    );

    return (
      <div className={styles.container}>
        <div className={styles.sideNavigation}>{sideCheckpoint}</div>
        <div className={styles.wrapper}>
          <div
            ref={el => {
              this.headerRef = el;
            }}
            className={styles.header}
          >
            <Header />
          </div>
          <div
            ref={el => {
              this.heroRef = el;
            }}
            className={styles.hero}
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
            className={styles.experiences}
            ref={el => {
              this.workExperienceRef = el;
            }}
          >
            <WorkExperience />
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
