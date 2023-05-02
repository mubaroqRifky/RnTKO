import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import logoRed from '../../assets/images/logo-red.png';
import image from '../../assets/images/bg-login.png';
import imageGoogle from '../../assets/images/logo-google.png';

const LoginIndex = ({navigation}) => {
  const signInHandler = () => {
    GoogleSignin.configure({
      androidClientId:
        '712078114440-el9faks7k9qprhktmaou7aj2ea24gt6e.apps.googleusercontent.com',
    });

    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              console.log(JSON.stringify(userInfo));
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(e => {
        console.log('ERROR IS: ' + JSON.stringify(e));
      });

    navigation.replace('Home');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.loginBody}>
            <Image
              source={logoRed}
              style={{width: 150, height: 150}}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: 40,
              }}>
              Harap Login menggunakan Email CPP Anda yang sudah tersambung di
              Handphone
            </Text>
            <TouchableOpacity style={styles.btnGoogle} onPress={signInHandler}>
              <Image source={imageGoogle} />
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Masuk dengan Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginIndex;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  loginBody: {
    backgroundColor: 'white',
    width: '85%',
    minHeight: 400,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btnGoogle: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: 2,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
