import React from 'react';
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
    <View>
      <Text>Loaded</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button onPress={props.loadedNotVisible} title='Go back'/>
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
    marginTop: 40
  }
})
export default LoadedEvent;