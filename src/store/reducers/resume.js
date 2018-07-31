import { FETCH_RESUME_SUCCESS } from 'store/actions/resume';

const defaultState = {
  resume: {
    personal: {},
    education: [],
    skills: [],
    experiences: [],
    certifications: [],
  },
  test: 'Hello! Redux is working!',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RESUME_SUCCESS:
      return {
        ...state,
        resume: action.resume,
      };
    default:
      return state;
  }
};
