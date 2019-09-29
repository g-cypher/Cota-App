import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from '@expo/vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import LogEvent from './screens/LogEvent';


export default function App() {
  return <AppContainer />;
};



const DashboardTabNavigator = createBottomTabNavigator(
  {
    Dashboard,
    LogEvent
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes
      [navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  });

const AppStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
},
{
  defaultNavigationOptions:({navigation}) => {
    return {
      headerLeft: 
        <Icon 
          onPress={ () => navigation.openDrawer()}  
          style={styles.hamburgerIcon} 
          name='md-menu' size={30} 
        />,
      headerStyle: {
        backgroundColor: '#254f9d',
      },
      headerTitleStyle: {
        color: 'white'
      }
    };
  }
});

const CotaDrawerNavigator = createDrawerNavigator({
  Dashboard: {screen: AppStackNavigator}

});

const CotaSwitchNavigator = createSwitchNavigator({
  Login:{screen: LoginScreen},
  Dashboard:{screen: CotaDrawerNavigator}
});

const AppContainer = createAppContainer(CotaSwitchNavigator);

const styles = StyleSheet.create({
  hamburgerIcon: {
    paddingLeft: 10,
    color: 'white'
  }
})