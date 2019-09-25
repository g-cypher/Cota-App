import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';
import Dashboard from '../screens/Dashboard';

const CotaNavigator = createStackNavigator({
    Login: LoginScreen,
    AccountCreation: CreateAccount,
    TripDashboard: Dashboard
});

export default createAppContainer(CotaNavigator);