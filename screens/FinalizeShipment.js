import React, { useState } from 'react';
import Colors from '../constants/Colors';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Switch
} from 'react-native';

const FinalizeShipment = props => {

  const [damageToggle, setDamageToggle] = useState(false);

  const handleToggleSwitch = () => {
    setDamageToggle(true);
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.blueOverlay}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Finalize Shipment</Text>
        </View>
      </View>
        <View style={styles.centerTitle}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Almost done!</Text>
            <Text style={styles.titleText2}>Just one last step.</Text>
            <Switch 
              style={styles.switch}
              onValueChange={handleToggleSwitch}
            />
            <Text style={styles.damageText}>Was there damage?</Text>
            <Text style={styles.damageText2}>Hit button if yes.</Text>
          </View>
        </View>
      </View>
  );
};

FinalizeShipment.navigationOptions = {
  headerTitle: <Image source={require('../assets/Logo.png')} style={{ width: 40, height: 40 }}/>
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0'
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Futura-CondensedMedium',
    letterSpacing: 1,
    marginTop: 20,
    color: Colors.primary
  },
  titleText2: {
    fontSize: 18,
    fontFamily: 'Futura-CondensedMedium',
    color: Colors.secondary

  },
  titleContainer: {
    alignItems: 'center',
    height: 200,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
  },
  centerTitle: {
    alignItems: 'center',
    marginVertical: 10,
    position: 'relative',
    bottom: 40
  },
  switch: {
    marginTop: 20,
    marginBottom: 20
  },
  damageText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary,
    fontFamily: 'Futura-CondensedMedium',
  },
  damageText2: {
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: 'Futura-CondensedMedium',
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
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default FinalizeShipment;