import {
  databaseRef,
} from 'services/firebase';
import {
  onLoadingEnd,
  onLoadingStart,
} from './ui';

export const FETCH_RESUME_START = 'FETCH_RESUME_START';
export const FETCH_RESUME_SUCCESS = 'FETCH_RESUME_START';
export const FETCH_RESUME_FAIL = 'FETCH_RESUME_START';

type ResumeProps = {
  education: Array,
  skills: Array,
  experiences: Array,
  certifications: Array,
};

export const fetchResumeSuccess = (resume: ResumeProps) => ({
  type: FETCH_RESUME_SUCCESS,
  resume,
});

export const fetchResume = () => async (dispatch) => {
  dispatch(onLoadingStart());
  let skills = [];
  let experiences = [];
  let certifications = [];
  let education = [];
  let links = [];

  const skillsRef = new Promise((res) => {
    databaseRef
      .child('resume')
      .child('skills')
      .on('value', (snapshot) => {
        [skills] = Object.values(snapshot.val());
        res();
      });
  });

  const experiencesRef = new Promise((res) => {
    databaseRef
      .child('resume')
      .child('experiences')
      .on('value', (snapshot) => {
        [experiences] = Object.values(snapshot.val());
        res();
      });
  });

  const certificationsRef = new Promise((res) => {
    databaseRef
      .child('resume')
      .child('certifications')
      .on('value', (snapshot) => {
        [certifications] = Object.values(snapshot.val());
        res();
      });
  });

  const educationRef = new Promise((res) => {
    databaseRef
      .child('resume')
      .child('education')
      .on('value', (snapshot) => {
        [education] = Object.values(snapshot.val());
        res();
      });
  });

  const linksRef = new Promise((res) => {
    databaseRef
      .child('resume')
      .child('links')
      .on('value', (snapshot) => {
        links = snapshot.val();
        res();
      });
  });

  Promise.all([skillsRef, experiencesRef, certificationsRef, educationRef, linksRef]).then(() => {
    const resume = {
      skills,
      experiences,
      certifications,
      education,
      links,
    };

    dispatch(fetchResumeSuccess(resume));
    dispatch(onLoadingEnd());
  });
};
