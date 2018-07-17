import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/HeroResume';
import Skills from 'components/skills/Skills';
import WorkExperience from 'components/work_experience/WorkExperience';
import Checkpoint from 'components/button/checkpoint/Checkpoint';
import Education from 'components/education/Education';
import Certificates from 'components/certificates/Certificates';
import LoadingMask from 'components/masks/LoadingMask';
import { fetchUserDetails } from 'store/actions/user';
import { fetchResume } from 'store/actions/resume';
import styles from './ResumePage.scss';

type ResumePageProps = {
  fetchUserDetails: Function,
  fetchResume: Function,
  userDetails: Object,
  loading: boolean,
  resume: {
    education: Array,
    skills: Array,
    experiences: Array,
    certifications: Array,
  },
};

class ResumePage extends React.PureComponent<ResumePageProps> {
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
    const {
      fetchUserDetails: fetchUserDetailsHandler,
      fetchResume: fetchResumeHandler,
    } = this.props;

    fetchUserDetailsHandler();
    fetchResumeHandler();

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
        onClick={() => {
          this.scrollTo(prop.reference);
        }}
        isActive={prop.visible}
        className={styles.checkpoint}
      >
        {prop.title}
      </Checkpoint>
    );

    const sideCheckpoint = (
      <div className={styles.sideNavigation__wrapper}>
        <CP reference={this.heroRef} visible={isHeroVisible} title="Profile Summary" />
        <CP reference={this.skillsRef} visible={isSkillVisible} title="Skills" />
        <CP
          reference={this.workExperienceRef}
          visible={isWorkExperienceVisible}
          title="Work Experiences"
        />
        <CP reference={this.educationRef} visible={isEducationVisible} title="Education" />
        <CP
          reference={this.certificationRef}
          visible={isCertificationVisible}
          title="Certifications"
        />
      </div>
    );

    const { userDetails, loading, resume } = this.props;

    return loading ? (
      <LoadingMask />
    ) : (
      <div className={styles.container}>
        <div className={styles.sideNavigation__container}>{sideCheckpoint}</div>
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
            <Hero user={userDetails} />
          </div>
          <div
            className={styles.skills}
            ref={el => {
              this.skillsRef = el;
            }}
          >
            <Skills skills={resume.skills} />
          </div>
          <div
            className={styles.experiences}
            ref={el => {
              this.workExperienceRef = el;
            }}
          >
            <WorkExperience experiences={resume.experiences}/>
          </div>
          <div
            className={styles.education}
            ref={el => {
              this.educationRef = el;
            }}
          >
            <Education education={resume.education}/>
          </div>
          <div
            className={styles.certifications}
            ref={el => {
              this.certificationRef = el;
            }}
          >
            <Certificates certifications={resume.certifications}/>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.user.user,
  resume: state.resume.resume,
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchUserDetails: () => dispatch(fetchUserDetails()),
  fetchResume: () => dispatch(fetchResume()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumePage);
