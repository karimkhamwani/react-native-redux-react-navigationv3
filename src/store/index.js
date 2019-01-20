import appReducer from '../reducers/index'
import {
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import {
    createStore,
    applyMiddleware,
} from 'redux';
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export default store = createStore(
    appReducer,
    applyMiddleware(middleware),
);