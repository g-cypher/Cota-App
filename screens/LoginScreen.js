import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Image,
    TextInput,
    Dimensions
} from 'react-native';

const LoginScreen = props => {
  return (
  <View style={styles.loginContainer}>
    <LinearGradient colors={['#254f9d', '#73a2d7']} style={styles.linearGradient}>
      <View style={styles.loginLogo}>
        <Image source={require('../assets/Logo.png')} style={{width: 150, height: 150}} />
      </View>
      <View style={styles.logoTextPositioning}>
        <Text style={styles.logoText}>COTA</Text>
      </View>
      <View style={styles.loginInputContainer}>
        <TextInput 
          placeholder='username' 
          style={styles.usernameInput} 
          textContentType='username'
        />
      </View>
      <View style={styles.loginInputContainer}>
        <TextInput 
          placeholder='password' 
          style={styles.passwordInput} 
          textContentType='password'
          secureTextEntry={true}
        />
      </View>
      <View style={styles.centerLoginBtn}>
        <View style={styles.loginBtnContainer}>
          <Button 
            style={styles.buttonTest}
            title='Login' 
            color='white'
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
        </View>
      </View>
      <View style={styles.needAccountContainer}>  
        <Text
          style={styles.needAccountBtn}
          onPress={() => {
            props.navigation.replace('AccountCreation')
          }}>Don't have an account?
        </Text>
      </View>
    </LinearGradient>
  </View>
    );
};

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  linearGradient: {
    flex: 1
  },
  loginLogo: {
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: Dimensions.get('window').height / 6
  },
  logoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    fontWeight: 'bold',
    letterSpacing: 2
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
  usernameInput: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 45,
    marginTop: 5,
    paddingHorizontal: 10
  },
  passwordInput: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 45,
    marginTop: 15,
    paddingHorizontal: 10
  },
  loginBtnContainer: {
    backgroundColor: '#254f9d',
    width: '70%',
    borderRadius: 10,
    marginTop: 15,
    
  },
  centerLoginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  needAccountBtn: {
    textDecorationLine: 'underline',
    color: 'white',
  },
  needAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  }
})

export default LoginScreen;


