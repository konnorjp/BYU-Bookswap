import firebase from 'firebase';

import {
  FORM_UPDATE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from './types';

export const formUpdate = ({ prop, value }) => {
    return {
      type: FORM_UPDATE,
      payload: { prop, value }
    };
};

export const createUser = ({ email, password, firstName, lastName }, callbackNav) => {
  return (dispatch) => {
    const name = `${firstName} ${lastName}`;
    console.log(name);
    dispatch({ type: CREATE_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: name
        });
      })
      .then(createUserSuccess(dispatch, firebase.auth().currentUser))
      .then(callbackNav(firebase.auth().currentUser))
      .catch(() => createUserFailure(dispatch));
  };
};

export const updateUser = ({ userName, photoURL, phoneNumber }) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER });
    firebase.auth().currentUser.updateProfile({
      displayName: userName,
      photoURL,
      phoneNumber
    })
    .then(user => updateUserSuccess(dispatch, user))
    .catch(() => updateUserFailure(dispatch));
  };
};

const updateUserSuccess = (dispatch, user) => {
  dispatch({
    type: UPDATE_USER_SUCCESS,
    payload: user
  });
};

const updateUserFailure = (dispatch) => {
  dispatch({ type: UPDATE_USER_FAILURE });
};

const createUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  });
};

const createUserFailure = (dispatch) => {
  dispatch({ type: CREATE_USER_FAILURE });
};
