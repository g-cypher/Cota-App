import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';


const PhotoEvent = props => {

  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert('You must grant camera permissions!', 
      [{text: 'Okay'}]
      );
      return false;
    }
    return true;
  };
  
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
  };

  return (
    <Modal visible={props.photoVisible} animationType='slide'>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={takeImageHandler}>
            <FontAwesome name='camera-retro' size={150} color={Colors.secondary} />
            {/* <Button title='take image' color='black' onPress={takeImageHandler} /> */}
          </TouchableOpacity>
          <Text style={styles.mainText}>Hit the camera to take a picture!</Text>
          <Text style={styles.subText}>Then press submit to submit photo</Text>
        </View>
        <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
            {!pickedImage ? <Text style={styles.mainText}>No Image Picked Yet!</Text>
            : <Image style={styles.image} source={{uri: pickedImage}} />}
          </View>
        </View>
      <View style={styles.centerButtons}>
        <View style={styles.buttonContainer}>
          <Button onPress={props.photoNotVisible} title='Submit' color='white'/>
        </View>
      </View>
    </Modal>
  );
};

PhotoEvent.navigationOptions = {
  headerTitle: 'Photo'
};


const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    backgroundColor: '#254f9d',
    padding: 10,
    marginTop: 30,
    borderRadius: 9,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20
  },
  centerButtons: {
    alignItems: 'center'
  },
  iconContainer: {
    marginTop: 60,
    alignItems:'center',
    marginBottom: 20
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 14,
    color: 'gray'
  },
  mainTextContainer: {
    marginTop: 40,
    alignItems: 'center'
  },
  imagePicker: {
    alignItems: 'center',
    marginTop: 10
  },
  imagePreview: {
    width: '80%',
    height: 300,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
export default PhotoEvent;