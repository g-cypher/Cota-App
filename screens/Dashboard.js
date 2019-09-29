import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native';
import Colors from '../constants/Colors';

const Dashboard = props => {
  return (
    <View style={styles.dashboardContainer}>
      <ScrollView>
      <View style={styles.dashHeaderContainer}>
        <View style={styles.headerAlignment}>
          <AntDesign name="clockcircle" size={25} color="white" />
          <Text style={styles.headerTitle}>3pm-5pm</Text>
          <Text style={styles.headerSubTitle}>Delivery Window</Text>
        </View>
        <View style={styles.headerAlignment}>
          <FontAwesome name='truck' size={28} color='white' />
          <Text style={styles.headerTitle}>Vehicle Name</Text>
          <Text style={styles.headerSubTitle}>Trailer Name</Text>
        </View>
      </View>
      <View style={styles.mapImage}>
        <Image source={require('../assets/mockMapImg.jpeg')} style={{width: '100%', height: 300}} />
      </View>
      </ScrollView>
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
    alignItems: 'center',
    backgroundColor: '#254f9d',
    marginVertical: 10,
    paddingVertical: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.20
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
  },
  mapImage: {
    marginHorizontal: 3
  },
  scrollContainer: {
    flex: 1
  }
});
export default Dashboard;