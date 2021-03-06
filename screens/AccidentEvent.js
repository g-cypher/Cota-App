import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button,
  TextInput
} from 'react-native';

const AccidentEvent = props => {
return (
    <Modal visible={props.accidentVisible} animationType='slide'>
      <View style={styles.modalContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name='announcement' size={200} color='#254f9d' />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>
            We hope you're ok!
          </Text>
        </View>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>
            Please tell us about your accident.
          </Text>
        </View>
        <View style={styles.accidentInputContainer}>
          <TextInput style={styles.accidentInput} multiline={true}>

          </TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={props.accidentNotVisible} title='Submit' color='white'/>
        </View>
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
  mainTextContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  },
  subTextContainer: {
    marginTop: 8
  },
  accidentInput: {
    height: 140,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%'
  },
  accidentInputContainer: {
    width: '80%',
    marginTop: 15,
    alignItems: 'center'
  }
})
export default AccidentEvent;