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

const LogEventNavigator = createStackNavigator({
  Log : {
    screen: LogEvent
  }
},
{
  defaultNavigationOptions:({navigation}) => {
    return {
      headerStyle: {
        backgroundColor: '#254f9d',
      },
      headerTitleStyle: {
        color: 'white'
      }
    };
  }
});

const DashNavigator = createStackNavigator({
  Dashboard  
},
{
  defaultNavigationOptions:({navigation}) => {
    return {
      headerStyle: {
        backgroundColor: '#254f9d',
        borderBottomColor: '#254f9d'
      },
      headerTitleStyle: {
        color: 'white'
      }
    };
  }
});
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Dash: {
      screen: DashNavigator
    },
    LogEvents : {
      screen: LogEventNavigator
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#73a2d7',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#282828'
      },
    },
  }
);

const CotaSwitchNavigator = createSwitchNavigator({
  Login:{screen: LoginScreen},
  Dashboard:{screen: DashboardTabNavigator}
});

const AppContainer = createAppContainer(CotaSwitchNavigator);
