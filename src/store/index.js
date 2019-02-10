import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { multiClientMiddleware } from 'redux-axios-middleware';
import axios from 'axios';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import appReducer from '../reducers/index';

const middleware = [];

const defaultClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
  responseType: 'json',
});

const clients = {
  default: {
    client: defaultClient,
  },
};

const axiosMiddleware = multiClientMiddleware(clients, { returnRejectedPromiseOnError: true });
middleware.push(thunk);
middleware.push(axiosMiddleware);


const persistConfig = {
  version: 0,
  key: 'root',
  whitelist: ['nav'],
  storage,
};

const loggerConfig = {
  duration: true,
  diff: true,
};

const loggerMiddleware = createLogger(loggerConfig);

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);


middleware.push(navigationMiddleware);

// eslint-disable-next-line no-undef
if (__DEV__) {
  // log only in dev
  middleware.push(loggerMiddleware);
}

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);
const persistor = persistStore(store);

export { store };
export { persistor };
