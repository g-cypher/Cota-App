import React from 'react';
import Colors from '../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  Text,
  Image,
  LinearGradient
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ShipmentDetail = props => {
  return (
    <View>
      <View style={styles.blueOverlay}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Shipment Detail</Text>
        </View>
      </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.shipmentDetailContainer}>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='calendar' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Pick up date</Text>
              <Text style={styles.textMarginLeft}>10/12</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='clock' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Pick-up time</Text>
              <Text style={styles.textMarginLeft}>3pm-5pm PST</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialIcons name='person-pin' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Appointment</Text>
              <Text style={styles.textMarginLeft}>Yes</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialIcons name='confirmation-number' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Pick-up #</Text>
              <Text style={styles.textMarginLeft}>12345</Text>
            </View>
            <View style={styles.shipmentDetailBreak}>
              <Text style={styles.detailBreakText}>Shipper</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>Walmart</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>408 10th St, San Francisco CA 94132</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>Jacob Becker</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>760-993-2287</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>jbecker@walmart.com</Text>
            </View>
            <View style={styles.shipmentDetailBreak}>
              <Text style={styles.detailBreakText}>Freight</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='package-variant' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Commodity</Text>
              <Text style={styles.textMarginLeft}>Apples</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='weight' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Weight</Text>
              <Text style={styles.textMarginLeft}>1000lbs</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='ruler' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Dimensions</Text>
              <Text style={styles.textMarginLeft}>30x10x5 ft.</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='file-presentation-box' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Pallets</Text>
              <Text style={styles.textMarginLeft}>8</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <FontAwesome name='exchange' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Pallet Exchange</Text>
              <Text style={styles.textMarginLeft}>No</Text>
            </View>
            <View style={styles.shipmentDetailBreak}>
              <Text style={styles.detailBreakText}>Delivery</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='calendar' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Delivery date</Text>
              <Text style={styles.textMarginLeft}>10/15</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='clock' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Delivery time</Text>
              <Text style={styles.textMarginLeft}>3pm-5pm PST</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialIcons name='person-pin' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Appointment</Text>
              <Text style={styles.textMarginLeft}>Yes</Text>
            </View>
            <View style={styles.shipmentDetailBreak}>
              <Text style={styles.detailBreakText}>Consignee</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>John Snow</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>1532 Main St, Austin TX 73301</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>760-993-2287</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.boldText}>jbecker@walmart.com</Text>
            </View>
            <View style={styles.shipmentDetailBreak}>
              <Text style={styles.detailBreakText}>Other</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='truck-delivery' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Check on Delivery</Text>
              <Text style={styles.textMarginLeft}>No</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialIcons name='confirmation-number' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>PO#</Text>
              <Text style={styles.textMarginLeft}>762071</Text>
            </View>
            <View style={styles.shipmentDetail}>
              <MaterialCommunityIcons name='truck-trailer' color={Colors.secondary} size={30} />
              <Text style={styles.detailTitle}>Trailer Type</Text>
              <Text style={styles.textMarginLeft}>N/A</Text>
            </View>
          </View>
        </ScrollView>
      </View>
  );
};

ShipmentDetail.navigationOptions = {
  headerTitle: <Image source={require('../assets/Logo.png')} style={{ width: 40, height: 40, marginLeft: 10 }}/>,
  backgroundColor: '#F0F0F0',
};

const styles = StyleSheet.create({
  scroll: {
    position: 'relative',
    bottom: 40
  },
  shipmentDetailBreak: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40,
    backgroundColor: Colors.primary,
    width: '50%',
    borderRadius: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
    marginBottom: 10
  },
  detailBreakText: {
    color: 'white',
    fontWeight: 'bold'
  },
  blueOverlay: {
    backgroundColor: Colors.primary,
    height: 80,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
  },
  headerTextContainer: {
    alignItems:'center',
    marginBottom: 5
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
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
    marginBottom: 40
  },
  textMarginLeft: {
    marginLeft: 'auto'
  },
  detailTitle: {
    marginLeft: 3,
    fontWeight: 'bold'
  },
  boldText: {
    fontWeight: 'bold'
  }
});

export default ShipmentDetail;