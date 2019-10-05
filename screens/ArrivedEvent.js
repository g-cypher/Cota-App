import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button
} from 'react-native';

const ArrivedEvent = props => {
  return (
      <Modal visible={props.visible} animationType='slide'>
      <View style={styles.modalContainer}>
        <View>
          <Text>Arrived</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={props.nonVisible} title='Go back'/>
        </View>
      </View>
      </Modal>
  );
};

ArrivedEvent.navigationOptions = {
  headerTitle: 'Arrived'
};


const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    marginTop: 40
  },
  modalContainer: {
    backgroundColor: '#303030',
    flex: 1
  }
})
export default ArrivedEvent;