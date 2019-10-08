import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button
} from 'react-native';

const LoadedEvent = props => {
return (
  <Modal visible={props.loadedVisible} animationType='slide'>
    <View style={styles.modalContainer}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name='truck-delivery' size={200} color='#254f9d' />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>
          Congrats, you've loaded!
        </Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>
          Click the button below to alert dispatch you've loaded.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={props.loadedNotVisible} title='Loaded' color='white'/>
      </View>
    </View>
  </Modal>
  );
};

LoadedEvent.navigationOptions = {
  headerTitle: 'Arrived'
};


const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    backgroundColor: '#254f9d',
    padding: 10,
    color: 'white',
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
export default LoadedEvent;