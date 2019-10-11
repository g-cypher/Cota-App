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
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ShipmentDetail from './screens/ShipmentDetail';
import TripHistory from './screens/TripHistory';
import FinalizeShipment from './screens/FinalizeShipment';


export default function App() {
  return <AppContainer />;
};

const LogEventNavigator = createStackNavigator({
  Log : {
    screen: LogEvent
  },
  Finalize: {
    screen: FinalizeShipment
  }
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

const ShipmentDetailNavigator = createStackNavigator({
  ShipmentDetails : {
    screen: ShipmentDetail
  }
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

const TripHistoryNavigator = createStackNavigator({
  History : {
    screen: TripHistory
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

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashNavigator, 
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <MaterialIcons name="dashboard" size={22} color={tabInfo.tintColor}/>
        }
      }
    },
    LogEvent : {
      screen: LogEventNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <MaterialIcons name="event" size={22} color={tabInfo.tintColor}/>
        }
      }
    },
    Shipment : {
      screen: ShipmentDetailNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <FontAwesome name='truck' size={22} color={tabInfo.tintColor} />
        }
      }
    },
    History : {
      screen: TripHistoryNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <FontAwesome name="history" size={22} color={tabInfo.tintColor}/>
        }
      }
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
