import React from 'react';
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
    <View>
      <Text>Check Call</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button onPress={props.checkNotVisible} title='Go back'/>
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
    marginTop: 40
  }
})
export default CheckCallEvent;