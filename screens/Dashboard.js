import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
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
      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.address}>2323 Address Lane</Text>
          <Text style={styles.address}>San Francisco CA, 94132</Text>
        </View>
        <View style={styles.addressIcon}>
          <FontAwesome name="map-marker" size={30} color="white" />
        </View>
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactName}>Contact Name</Text>
          <Ionicons style={styles.contactIcons} name="ios-text" size={30} color="white" />
          <Entypo style={styles.contactIcons} name="phone" size={30} color="white" />
          <MaterialIcons style={styles.contactIcons} name="email" size={30} color="white" />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.shipmentDetailContainer2}>
          <View style={styles.detailBoxes2}>
            <Text>Commodity</Text>
            <Text style={styles.details}>apples</Text>
          </View>
          <View style={styles.detailBoxes2}>
            <Text>Appointment</Text>
            <Text style={styles.details}>Yes</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.shipmentDetailContainer}>
          <View style={styles.detailBoxes}>
            <Text>Weight</Text>
            <Text style={styles.details}>1000lbs</Text>
          </View>
          <View style={styles.detailBoxes}>
            <Text>PU</Text>
            <Text style={styles.details}>12345</Text>
          </View>
          <View style={styles.detailBoxes}>
            <Text>PO#</Text>
            <Text style={styles.details}>123456789</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
    );
};

Dashboard.navigationOptions = {
  headerTitle: 'Trip Dashboard'
};

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  wrapper: {
    flex: 1
  },
  details: {
    fontSize: 12,
    color: 'gray'
  },
  detailBoxes: {
    width: '30%',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F5F5F5',
    borderWidth: 7,
    marginBottom: 10
  },
  detailBoxes2: {
    width: '40%',
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F5F5F5',
    borderWidth: 7,
    marginBottom: 10
  },
  shipmentDetailContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  contactIcons: {
    marginRight: 25
  },
  shipmentDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  contactContainer: {
    flexDirection: 'row',
    backgroundColor: '#254f9d',
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center'
  },
  contactName: {
    marginRight: 'auto',
    marginLeft: 25,
    color: 'white'
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#254f9d',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 25,
    height: 75,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.20
  },
  address: {
    color: 'white',
    fontSize: 16
  },
  dashHeaderContainer: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#254f9d',
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
  scrollContainer: {
    flex: 1
  }
});
export default Dashboard;