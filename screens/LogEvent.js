import React, {useState} from 'react';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ArrivedEvent from './ArrivedEvent';
import LoadedEvent from './LoadedEvent';
import DepartedEvent from './DepartedEvent';
import AccidentEvent from './AccidentEvent';
import CheckCallEvent from './CheckCallEvent';
import PhotoEvent from './PhotoEvent';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

const LogEvent = props => {
  
  const [isArrivedMode, setIsArrivedMode] = useState(false);
  const [isLoadedMode, setIsLoadedMode] = useState(false);
  const [isDepartedMode, setIsDepartedMode] = useState(false);
  const [isAccidentMode, setIsAccidentMode] = useState(false);
  const [isCheckCallMode, setIsCheckCallMode] = useState(false);
  const [isPhotoMode, setIsPhotoMode] = useState(false);

  const submitArrival = () => {
    setIsArrivedMode(false);
  };

  const submitLoaded = () => {
    setIsLoadedMode(false);
  };

  const submitDeparted = () => {
    setIsDepartedMode(false);
  };
  
  const submitAccident = () => {
    setIsAccidentMode(false);
  };

  const submitCheckCall = () => {
    setIsCheckCallMode(false);
  };

  const submitPhoto = () => {
    setIsPhotoMode(false);
  };

  return (
    <View style={styles.logContainer}>
      <View style={styles.absolutePositionedBlue}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Log Event</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.eventsContainer}>
          <View style={styles.eventBoxes}>
            <TouchableOpacity onPress={() => setIsArrivedMode(true)}>
              <View style={styles.iconContainer}>
                <FontAwesome name='arrow-circle-up' size={37} color='white' />
              </View>
            </TouchableOpacity>
            <View style={styles.textMarginTop}>
              <Text style={styles.eventText}>ARRIVED</Text>
              <Text style={styles.subEventText}>Log arrival</Text>
            </View>
          </View>
          <ArrivedEvent visible={isArrivedMode} nonVisible={submitArrival}/>
          <View style={styles.eventBoxes}>
            <TouchableOpacity onPress={() => setIsAccidentMode(true)}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name='human-greeting' size={37} color='white' />
              </View>
            </TouchableOpacity>
            <View style={styles.textMarginTop}>
              <Text style={styles.eventText}>ACCIDENT</Text>
              <Text style={styles.subEventText}>Log an accident</Text>
            </View>
          </View>
        </View>
        <AccidentEvent accidentVisible={isAccidentMode} accidentNotVisible={submitAccident}/>
        <View style={styles.eventsContainer}>
          <View style={styles.eventBoxes}>
          <TouchableOpacity onPress={() => setIsLoadedMode(true)}>
            <View style={styles.iconContainer}>
              <FontAwesome name='arrow-circle-right' size={37} color='white' />
            </View>
          </TouchableOpacity>
            <View style={styles.textMarginTop}>
              <Text style={styles.eventText}>LOADED</Text>
              <Text style={styles.subEventText}>Log you've loaded</Text>
            </View>
          </View>
          <LoadedEvent loadedVisible={isLoadedMode} loadedNotVisible={submitLoaded}/>
          <View style={styles.eventBoxes}>
          <TouchableOpacity onPress={() => setIsCheckCallMode(true)}>
            <View style={styles.iconContainer}>
              <MaterialIcons name='directions-car' size={37} color='white' />
            </View>
          </TouchableOpacity>
            <View style={styles.textMarginTop}>
              <Text style={styles.eventText}>CHECK CALL</Text>
              <Text style={styles.subEventText}>Log your location</Text>
            </View>
          </View>
        </View>
        <CheckCallEvent checkVisible={isCheckCallMode} checkNotVisible={submitCheckCall}/>
        <View style={styles.eventsContainer}>
          <View style={styles.eventBoxes}>
            <TouchableOpacity onPress={ () => setIsDepartedMode(true)}>
              <View style={styles.iconContainer}>
                <FontAwesome name='arrow-circle-down' size={37} color='white' />
              </View>
            </TouchableOpacity>
            <View style={styles.textMarginTop}>
              <Text style={styles.eventText}>DEPARTED</Text>
              <Text style={styles.subEventText}>Log your departure</Text>
            </View>
          </View>
          <DepartedEvent departedVisible={isDepartedMode} departedNotVisible={submitDeparted}/>
          <View style={styles.eventBoxes}>
            <TouchableOpacity onPress={ () => setIsPhotoMode(true)}>
              <View style={styles.iconContainer}>
                <MaterialIcons name='add-a-photo' size={37} color='white' />
              </View>
            </TouchableOpacity>
            <View style={styles.textMarginTop}>
              <Text style={styles.eventText}>PHOTO</Text>
              <Text style={styles.subEventText}>Take a photo</Text>
            </View>
          </View>
        </View>
        <PhotoEvent photoVisible={isPhotoMode} photoNotVisible={submitPhoto} />
        <View style={styles.testing}>
          <View style={styles.logButtonContainer}>
            <TouchableOpacity style={styles.generalLogButton}>
              <Text style={styles.logButtonText}>Finalize Shipment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
};

LogEvent.navigationOptions = {
  headerTitle: <Image source={require('../assets/Logo.png')} style={{ width: 40, height: 40 }}/>,
  // headerLeft: 
  //   <Image source={require('../assets/Logo.png')} style={{ width: 40, height: 40, marginLeft: 10 }}/>,
  backgroundColor: '#F0F0F0',
};

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0' 
  },
  logButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
    marginLeft: 5
  },
  testing: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  generalLogButton: {
    backgroundColor: Colors.secondary,
    padding: 16,
    width: '70%',
    alignItems: 'center',
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  absolutePositionedBlue: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    height: 80,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
  },
  logButtonContainer: {
    width: '80%',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
    
  },
  eventText: {
    fontWeight: 'bold',
    letterSpacing: 1
  },
  textMarginTop: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subEventText: {
    fontSize: 10,
    color: 'gray'
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 80/2,
    backgroundColor: '#73a2d7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    position: 'relative',
    top: 30,
  },
  eventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  eventBoxes: {
    width: '38%',
    backgroundColor: 'white',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 9,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.20,
  },
  headerTextContainer: {
    alignItems:'center'
  },
  headerText: {
    color: 'white',
    fontSize: 16
  }
});

export default LogEvent;