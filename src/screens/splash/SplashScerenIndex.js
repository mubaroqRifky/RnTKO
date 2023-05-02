import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';

import image from '../../assets/images/bg-login.png';
import logo from '../../assets/images/logo-white.png';
import logoCpp from '../../assets/images/logoCpp.png';

const SplashScerenIndex = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={logo} style={styles.logo} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 30,
            }}>
            <Image source={logoCpp} style={styles.logoCpp} />
            <Text style={styles.text}>Managed by CPP</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScerenIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    resizeMode: 'contain',
    marginTop: -50,
  },
  logoCpp: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
