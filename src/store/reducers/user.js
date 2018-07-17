import {
  FETCH_USER_SUCCESS
} from 'store/actions/user';

const defaultState = {
  user: {
    birthday: null,
    firstName: null,
    middleName: null,
    lastName: null,
    email: null,
    company: null,
    jobTitle: null,
    position: null,
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
