export const FETCH_RESUME_START = 'FETCH_RESUME_START';
export const FETCH_RESUME_SUCCESS = 'FETCH_RESUME_START';
export const FETCH_RESUME_FAIL = 'FETCH_RESUME_START';

type ResumeProps = {
  personal: Object,
  education: Array,
  skills: Array,
  experiences: Array,
  certifications: Array,
}

export const fetchResume = () => ({
  type: FETCH_RESUME_START,
});


export const fetchResumeSuccess = (resume: ResumeProps) => ({
  type: FETCH_RESUME_SUCCESS,
  resume,
});