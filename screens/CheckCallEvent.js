import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button
} from 'react-native';

const CheckCallEvent = props => {
return (
  <Modal visible={props.checkVisible} animationType='slide'>
    <View style={styles.modalContainer}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name='truck-delivery' size={200} color='#254f9d' />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>
          Mark your location!
        </Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>
          Click the button below to alert dispatch where you are.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={props.checkNotVisible} title='Check Call' color='white'/>
      </View>
    </View>
  </Modal>
  );
};

CheckCallEvent.navigationOptions = {
  headerTitle: 'Check Call'
};


const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    backgroundColor: '#254f9d',
    padding: 10,
    marginTop: 20,
    borderRadius: 9,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center'
  },
  iconContainer: {
    marginTop: 135
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  },
  mainTextContainer: {
    marginTop: 40,
    alignItems: 'center'
  },
  subTextContainer: {
    marginTop: 8
  }
})
export default CheckCallEvent;