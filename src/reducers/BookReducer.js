import {
  ADD_USER_BOOK,
  GET_BOOK_SUCCESS,
  CLEAR_BOOK_FORM,
  CHANGE_BOOK_INFO_SUCCESS,
  BOOK_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  imageURL: '',
  title: '',
  author: '',
  isbn: '',
  courseNumber: '',
  condition: '',
  price: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_BOOK:
      return INITIAL_STATE;
    case GET_BOOK_SUCCESS:
      return action.payload;
    case CLEAR_BOOK_FORM:
      return INITIAL_STATE;
    case CHANGE_BOOK_INFO_SUCCESS:
      return { ...state };
    case BOOK_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
