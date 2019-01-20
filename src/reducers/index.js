import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import {
  combineReducers,
} from 'redux';
import AppContainer from '../navigation/Navigators/RootNavigator';

const navReducer = createNavigationReducer(AppContainer);
export default combineReducers({
  nav: navReducer,
});
