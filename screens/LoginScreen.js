import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Image,
    TextInput
} from 'react-native';

const LoginScreen = props => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <View style={styles.loginLogo}>
        <Image source={require('../assets/Logo.png')} style={{width: 150, height: 150}} />
      </View>
      <View style={styles.logoTextPositioning}>
        <Text style={styles.logoText}>COTA</Text>
      </View>
      <View style={styles.loginInputContainer}>
        <TextInput 
          placeholder='username' 
          style={styles.loginInput} 
        />
      </View>
      <View style={styles.loginInputContainer}>
        <TextInput 
          placeholder='password' 
          style={styles.loginInput} 
        />
      </View>
      <View>
        <Button 
          title='Login' 
          color='red'
          style={styles.loginButton}
          onPress={() => {
            props.navigation.replace('TripDashboard');
          }}/>
      </View>
    </LinearGradient>
    );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  loginLogo: {
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 30
  },
  logoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 60
  },
  logoTextPositioning: {
    marginTop: 5,
    justifyContent: 'center',
    flexDirection: "row"
  },
  loginInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginInput: {
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    marginBottom: 20
  },
  loginButton: {
    backgroundColor: 'yellow'

  }
})

export default LoginScreen;


