import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/HeroResume';
import Skills from 'components/skills/Skills';
import WorkExperience from 'components/work_experience/WorkExperience';
import Checkpoint from 'components/button/checkpoint/Checkpoint';
import Education from 'components/education/Education';
import Certificates from 'components/certificates/Certificates';
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
  }
};

class ResumePage extends React.Component {
  skillsRef = React.createRef();

  heroRef = React.createRef();

  workExperienceRef = React.createRef();

  educationRef = React.createRef();

  certificationRef = React.createRef();

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    isHeroVisible: false,
    isSkillVisible: false,
    isWorkExperienceVisible: false,
    isEducationVisible: false,
    isCertificationVisible: false,
  };

  componentDidMount() {
    this.changeCheckpoint();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  changeCheckpoint = () => {
    let isHeroVisible = false;
    let isSkillVisible = false;
    let isWorkExperienceVisible = false;
    let isEducationVisible = false;
    let isCertificationVisible = false;

    if (this.isInViewport(this.heroRef)) {
      isHeroVisible = true;
    } else if (this.isInViewport(this.skillsRef)) {
      isSkillVisible = true;
    } else if (this.isInViewport(this.workExperienceRef)) {
      isWorkExperienceVisible = true;
    } else if (this.isInViewport(this.educationRef)) {
      isEducationVisible = true;
    } else if (this.isInViewport(this.certificationRef)) {
      isCertificationVisible = true;
    }

    this.setState(prevState => ({
      ...prevState,
      isHeroVisible,
      isSkillVisible,
      isWorkExperienceVisible,
      isEducationVisible,
      isCertificationVisible,
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
      isHeroVisible,
      isSkillVisible,
      isWorkExperienceVisible,
      isEducationVisible,
      isCertificationVisible,
    } = this.state;

    const CP = prop => (
      <Checkpoint
      size={20}
      style={navStyle.item}
      onClick={() => {
        this.scrollTo(prop.reference);
      }}
      isActive={prop.visible}
    >
      {prop.title}
    </Checkpoint>
    )

    const sideCheckpoint = (
      <div style={navStyle.container}>
        <div style={navStyle.wrapper}>
          <CP reference={this.heroRef} visible={isHeroVisible} title="Profile Summary" />
          <CP reference={this.skillsRef} visible={isSkillVisible} title="Skills" />
          <CP reference={this.workExperienceRef} visible={isWorkExperienceVisible} title="Work Experiences" />
          <CP reference={this.educationRef} visible={isEducationVisible} title="Education" />
          <CP reference={this.certificationRef} visible={isCertificationVisible} title="Certifications" />
        </div>
      </div>
    );

    return (
      <div className={styles.container}>
        <div className={styles.sideNavigation}>{sideCheckpoint}</div>
        <div className={styles.wrapper}>
          <div className={styles.header}>
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
            className={styles.education}
            ref={el => {
              this.educationRef = el;
            }}
          >
            <Education />
          </div>
          <div
            className={styles.certifications}
            ref={el => {
              this.certificationRef = el;
            }}
          >
            <Certificates />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
