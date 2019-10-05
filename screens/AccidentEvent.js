import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button
} from 'react-native';

const AccidentEvent = props => {
return (
    <Modal visible={props.accidentVisible} animationType='slide'>
      <View>
        <Text>Accident</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={props.accidentNotVisible} title='Go back'/>
      </View>
    </Modal>
  );
};

AccidentEvent.navigationOptions = {
  headerTitle: 'Accident'
};


const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    marginTop: 40
  }
})
export default AccidentEvent;