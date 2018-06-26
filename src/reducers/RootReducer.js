import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import BookReducer from './BookReducer';
import BookFirebaseReducer from './BookFirebaseReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  signUp: SignUpReducer,
  BookReducer,
  BookFirebaseReducer
});

export default RootReducer;
