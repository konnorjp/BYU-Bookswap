import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER,
} from './types';

export const emailChanged = (text) => {
  return ({
    type: EMAIL_CHANGED,
    payload: text
  });
};

export const passwordChanged = (text) => {
  return ({
    type: PASSWORD_CHANGED,
    payload: text
  });
};

export const loginUser = ({ email, password }, callbackNav) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .then(user => callbackNav(user))
      .catch(() => loginUserFailure(dispatch));
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFailure = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILURE });
};
