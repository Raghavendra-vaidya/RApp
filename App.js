import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ListScreen: ListScreen,
    SearchScreen: SearchScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(navigator);
