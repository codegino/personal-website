import {
  FETCH_ABOUT_ME_SUCCESS
} from 'store/actions/about';

const defaultState = {
  texts: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ABOUT_ME_SUCCESS:
      return {
        ...state,
        texts: action.texts
      };
    default:
      return state;
  }
}
