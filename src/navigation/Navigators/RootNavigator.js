import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../../modules/Home/screen/HomeScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
});


export default createAppContainer(AppNavigator);
