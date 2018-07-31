import {
  databaseRef
} from 'services/firebase';
import {
  onLoadingStart,
  onLoadingEnd
} from './ui';

export const FETCH_ABOUT_ME_SUCCESS = 'FETCH_ABOUT_ME_SUCCESS';
export const FETCH_ABOUT_ME_FAIL = 'FETCH_ABOUT_ME_FAIL';

export const fetchAboutMeSuccess = (texts) => ({
  type: FETCH_ABOUT_ME_SUCCESS,
  texts,
});

export const fetchAboutMe = () => dispatch => {
  dispatch(onLoadingStart());
  databaseRef
    .child('about')
    .on('value', snapshot => {
      dispatch(fetchAboutMeSuccess(
        snapshot.val()
      ));
      dispatch(onLoadingEnd());
    });
};


export const fetchUserFail = () => ({
  type: FETCH_ABOUT_ME_FAIL,
});