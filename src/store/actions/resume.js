import {
  databaseRef
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
}

export const fetchResumeSuccess = (resume: ResumeProps) => ({
  type: FETCH_RESUME_SUCCESS,
  resume,
});

export const fetchResume = () => dispatch => {
  dispatch(onLoadingStart());
  databaseRef.child('resume').on('value', snapshot => {
    const val = snapshot.val();

    const resume = {
      skills: Object.values(val.skills)[0],
      experiences: Object.values(val.experiences)[0],
      certifications: Object.values(val.certifications)[0],
      education: Object.values(val.education)[0],
    }
    dispatch(fetchResumeSuccess(resume))
    dispatch(onLoadingEnd());
  })
};

