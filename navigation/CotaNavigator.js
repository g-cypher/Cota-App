import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';
import Dashboard from '../screens/Dashboard';

const CotaStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  AccountCreation: CreateAccount,

  TripDashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Trip Dashboard',
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#254f9d',
      },
    }
  } 
});

export default createAppContainer(CotaStackNavigator);
