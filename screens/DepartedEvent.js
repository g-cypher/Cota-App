import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button
} from 'react-native';

const DepartedEvent = props => {
  return (
    <Modal visible={props.departedVisible} animationType='slide'>
      <View>
        <Text>Departed</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={props.departedNotVisible} title='Go back'/>
      </View>
    </Modal>
  );
};

DepartedEvent.navigationOptions = {
  headerTitle: 'Departed'
};


const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    marginTop: 40
  }
})
export default DepartedEvent;