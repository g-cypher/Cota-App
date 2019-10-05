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
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const LogEvent = props => {
  
  const [isArrivedMode, setIsArrivedMode] = useState(false);
  const [isLoadedMode, setIsLoadedMode] = useState(false);
  const [isDepartedMode, setIsDepartedMode] = useState(false);
  const [isAccidentMode, setIsAccidentMode] = useState(false);
  const [isCheckCallMode, setIsCheckCallMode] = useState(false);

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

  return (
    <View style={styles.logContainer}>
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
            </View>
          </View>
          <DepartedEvent departedVisible={isDepartedMode} departedNotVisible={submitDeparted}/>
          <View style={styles.eventBoxes}>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <MaterialIcons name='add-a-photo' size={37} color='white' />
              </View>
            </TouchableOpacity>
            <View style={styles.textMarginTop}>
              <Text style={styles.eventText}>PHOTO</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

LogEvent.navigationOptions = {
  headerTitle: 'Log Event',
  backgroundColor: '#F0F0F0'
};

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0' 
  },
  eventText: {
    fontWeight: 'bold',
    letterSpacing: 1
  },
  textMarginTop: {
    marginTop: 5
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
    flex: 1,
    marginTop: 40
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
  }
});

export default LogEvent;