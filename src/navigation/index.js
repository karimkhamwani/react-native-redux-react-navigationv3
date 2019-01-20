import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from './Navigators/RootNavigator';

createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const AppRoot = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(AppRoot);
