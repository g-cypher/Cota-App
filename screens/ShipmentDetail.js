import React from 'react';
import Colors from '../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

const ShipmentDetail = props => {
  return (
    <View style={styles.logContainer}>
      <View style={styles.absolutePositionedBlue}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Shipment Detail</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.shipmentDetailContainer}>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='weight' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Weight</Text>
              <Text style={styles.textMarginLeft}>1000lbs</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='clock' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Delivery</Text>
              <Text style={styles.textMarginLeft}>10/15, 3pm-5pm PST</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='ruler' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Dimensions</Text>
              <Text style={styles.textMarginLeft}>40x8x6ft</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='ruler' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Dimensions</Text>
              <Text style={styles.textMarginLeft}>40x8x6ft</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

ShipmentDetail.navigationOptions = {
  headerTitle: <Image source={require('../assets/Logo.png')} style={{ width: 40, height: 40 }}/>,
  backgroundColor: '#F0F0F0',
};

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0' 
  },
  wrapper: {
    position: 'relative',
    top: 30,
  },
  absolutePositionedBlue: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    height: 80,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
  },
  headerTextContainer: {
    alignItems:'center'
  },
  headerText: {
    color: 'white',
    fontSize: 16
  },
  shipmentDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 60,
    backgroundColor: '#F8F8F8',
    width: '80%',
    borderRadius: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
    marginBottom: 10
  },
  shipmentDetailContainer: {
    alignItems: 'center',
  },
  textMarginLeft: {
    marginLeft: 'auto'
  },
  detailTitle: {
    marginLeft: 3
  }
  // eventsContainer: {
  //   justifyContent: 'space-around'
  // }
});

export default ShipmentDetail;