import {
  databaseRef
} from 'services/firebase';
import { onLoadingStart, onLoadingEnd } from './ui';

export const FETCH_USER_SUCCESS = 'FETCH_USER_START';
export const FETCH_USER_FAIL = 'FETCH_USER_START';


type UserProps = {
  birthday: string,
  firstName: string,
  lastName: string,
  middleName: string,
  email: string,
}

export const fetchUserSuccess = (user: UserProps) => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const fetchUserDetails = () => dispatch => {
  dispatch(onLoadingStart());
  databaseRef.child('personal').on('value', snapshot => {
    dispatch(fetchUserSuccess(snapshot.val()))
    dispatch(onLoadingEnd());
  })
};


export const fetchUserFail = () => ({
  type: FETCH_USER_FAIL,
});