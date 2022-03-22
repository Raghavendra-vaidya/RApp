import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import SearchScreen from './src/screens/SearchScreen';
import Login from './src/screens/Login';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ListScreen: ListScreen,
    SearchScreen: SearchScreen,
    Login: Login,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(navigator);
