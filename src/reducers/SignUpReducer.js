import {
  FORM_UPDATE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  photoURL: '',
  phoneNumber: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value, error: '' };
    case CREATE_USER:
      return { ...state, loading: true, error: '' };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_USER_FAILURE:
      return { ...state, error: 'Unable to create user.', loading: false };
    case UPDATE_USER:
      return { ...state, loading: true, error: '' };
    case UPDATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case UPDATE_USER_FAILURE:
      return { ...state, error: 'Unable to update user information.', loading: false };
    default:
      return state;
  }
};
