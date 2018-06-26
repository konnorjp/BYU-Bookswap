import firebase from 'firebase';
import {
  GET_USER_BOOKS_SUCCESS,
  GET_BOOK_SUCCESS,
  CLEAR_BOOK_FORM,
  ADD_USER_BOOK,
  CHANGE_BOOK_INFO_SUCCESS,
  BOOK_UPDATE
} from './types';

export const bookUpdate = ({ prop, value }) => {
    return {
      type: BOOK_UPDATE,
      payload: { prop, value }
    };
};

export const bookCreate = ({
  imageURL, title, author, isbn, courseNumber, condition, price }, callbackNav) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/books`)
      .push({ imageURL, title, author, isbn, courseNumber, condition, price })
      .then(() => {
        dispatch({ type: ADD_USER_BOOK });
        callbackNav();
    });
  };
};

export const getUserBooks = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/books`)
      .on('value', snapshot => {
        dispatch({ type: GET_USER_BOOKS_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const clearBookForm = () => {
  return { type: CLEAR_BOOK_FORM };
};

export const getBook = (bookID) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/books/${bookID}/`)
      .on('value', snapshot => {
        dispatch({ type: GET_BOOK_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const changeBookInfo = ({
  imageURL, title, author, isbn, courseNumber, condition, price, uid }, callbackNav) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/books/${uid}`)
      .set({ imageURL, title, author, isbn, courseNumber, condition, price })
      .then(() => {
        dispatch({ type: CHANGE_BOOK_INFO_SUCCESS });
        callbackNav();
      });
  };
};

export const deleteUserBook = (uid, callbackNav) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/books/${uid}`)
      .remove()
      .then(() => {
        callbackNav();
      });
  };
};
