import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import appReducer from '../reducers/index';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default createStore(
  appReducer,
  applyMiddleware(middleware),
);
