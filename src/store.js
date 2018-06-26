import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from './reducers/RootReducer';

let middleware = [thunk];

if (__DEV__) {
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export default function configureStore() {
  return createStore(
    RootReducer,
    {},
    applyMiddleware(...middleware)
  );
}
