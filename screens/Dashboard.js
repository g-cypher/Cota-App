import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import Colors from '../constants/Colors';

const Dashboard = props => {
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.dashHeaderContainer}>
        <View style={styles.headerAlignment}>
          <Image 
            style={{width: 40, height: 40}}
            source={require('../assets/clock.png')}
          />
          <Text style={styles.headerTitle}>3pm-5pm</Text>
          <Text style={styles.headerSubTitle}>Delivery Window</Text>
        </View>
        <View style={styles.headerAlignment}>
          <Image 
            style={{width: 40, height: 40}}
            source={require('../assets/clock.png')}
          />
          <Text style={styles.headerTitle}>Vehicle Name</Text>
          <Text style={styles.headerSubTitle}>Trailer Name</Text>
        </View>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  dashHeaderContainer: {
    flexDirection:'row',
    justifyContent: 'space-around',
    backgroundColor: '#254f9d',
  },
  headerAlignment: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: 'white'
  },
  headerSubTitle: {
    fontSize: 12,
    color: 'white'
  }
});
export default Dashboard;